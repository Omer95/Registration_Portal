import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { DelegationData } from './interfaces';

@Injectable()
export class DelegationService {
    //path to firebase database 
    private basePath: string = '/DelegationData';
    //list of objects observable
    items: FirebaseListObservable<DelegationData[]> = null;
    // single object
    item: FirebaseObjectObservable<DelegationData> = null;

    constructor(private db: AngularFireDatabase) { }
    
    
    
    getDelegationDataList(query={}): FirebaseListObservable<DelegationData[]> {
        this.items= this.db.list(this.basePath, {
            query: query
        });
        return this.items;
    }
    
    getDelegationData(key: string): FirebaseObjectObservable<DelegationData> {
        const itemPath= `${this.basePath}/${key}`;
        this.item=this.db.object(itemPath)
        return this.item
    }
    
    createItem(item: DelegationData): void {
        this.items.push(item)
        //.catch(error => this.handleError(error));
    }
    
    updateItem(key: string, value: any): void {
        this.items.update(key, value)
        .catch(error => this.handleError(error))
    }
    
    deleteItem(key: string): void {
        this.items.remove(key)
        .catch(error => this.handleError(error))
    }
    
    deleteAll(): void {
        this.items.remove()
        .catch(error => this.handleError(error))
    }
    
    private handleError(error) {
        console.log(error)
    }
    
    
}
