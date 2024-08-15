import {Nullable} from "./Nullable.ts";

export interface GridItem {
    id:number,
    title:string,
    image_url:string,
    link_url:string,
    description:string,
    stars:Nullable<{selected:number, count:number}>,
}