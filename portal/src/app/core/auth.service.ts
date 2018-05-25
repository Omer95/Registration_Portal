import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import { DelegationData } from '../shared/interfaces';

@Injectable()
export class AuthService {
    authState: any= null;
    user: Observable<DelegationData>;
    // tslint:disable-next-line:no-trailing-whitespace
    
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) {
      this.afAuth.authState.subscribe((auth) => {
          this.authState = auth;
      });
      this.user = this.afAuth.authState.switchMap(user => {
        if (user) {
          return this.db.object(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      });
  }

    // returns true if user is logged in
    get authenticated(): boolean {
        return this.authState !== null;
    }
    // Returns the current user
    get currentUser(): any {
        return this.authenticated ? this.authState : null;
    }
    // Returns
    get currentUserObservable(): any {
        return this.afAuth.authState;
    }
    // Returns current user UID
    get currentUserId(): string {
        return this.authenticated ? this.authState.uid : '';
    }
    get currentUserEmail(): string {
      return this.authenticated ? this.authState.email : '';
    }
    // Anonymous user
    get currentUserAnonymous(): boolean {
        return this.authenticated ? this.authState.isAnonymous : false;
    }
    // Returns current user display name or Guest
    get currentUserDisplayName(): string {
        if (!this.authState) {
            return 'Guest';
        }
        // tslint:disable-next-line:one-line
        else if (this.currentUserAnonymous) {
            return 'Anonymous';
        }
        // tslint:disable-next-line:one-line
        else {
            return this.authState['displayName'] || 'User without a Name';
        }
    }
    // Social Auths
    googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return this.socialSignIn(provider);
    }
    facebookLogin() {
        const provider = new firebase.auth.FacebookAuthProvider();
        return this.socialSignIn(provider);
    }
    private socialSignIn(provider) {
        return this.afAuth.auth.signInWithPopup(provider)
        .then((credential) => {
            this.authState = credential.user;
            this.updateUserData();
        })
        .catch(error => console.log(error));
    }
    // Anonymous Auth
    anonymousLogin() {
        return this.afAuth.auth.signInAnonymously()
        .then((user) => {
            this.authState = user;
            this.updateUserData();
        })
        .catch(error => console.log(error));
    }
    // Email/password Auth
    emailSignUp(email: string, password: string) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            this.authState = user;
            this.updateUserData();
        })
        .catch(error => console.log(error));
    }
    emailLogin(email: string, password: string) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            this.authState = user;
            this.updateUserData();
        })
        .catch(error => console.log(error));
    }
    // Sends email allowing user to reset password
    resetPassword(email: string) {
        const auth = firebase.auth();
        return auth.sendPasswordResetEmail(email)
        .then(() => console.log('email sent'))
        .catch((error) => console.log(error));
    }
    // Sign out
    signOut(): void {
        this.afAuth.auth.signOut();
        this.router.navigate(['/user-login']);
        console.log(this.currentUserId);
    }
    // Helpers
    private updateUserData(): void {
        // Writes user name and email to realtime db
        // tslint:disable-next-line:prefer-const
        let dbPath = `users/${this.currentUserId}`; // Endpoint on firebase
        // tslint:disable-next-line:prefer-const
        let data = {
            uid: this.authState.uid,
            email: this.authState.email,
            name: this.authState.displayName,
            photoURL: this.authState.photoURL
        };
        this.db.object(dbPath).update(data)
        .catch(error => console.log(error));
    }
}
