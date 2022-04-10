import {Instance} from "mobx-state-tree";
import RootStore from "../StoreModels/Stores/RootStore.store";
import {ContentModel} from "../StoreModels/Models/Content.model";


export  interface  IRootStore extends  Instance<typeof RootStore>{

}
export  interface  IContentModel extends  Instance<typeof ContentModel>{

}