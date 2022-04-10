import {types} from "mobx-state-tree";
import {ContentModel} from "../Models/Content.model";

const RootStore =types.model('RootStore',{
    content:types.array(ContentModel),
})

export default RootStore