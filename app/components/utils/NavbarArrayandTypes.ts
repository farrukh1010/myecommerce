 export interface NavbarItemType{
    label:string,
    href:string,
    isDropDown:boolean,
    dropDownData ?:any,
}
export const NavbarArray: Array<NavbarItemType>=[
    {
        label:"Female",
        href:"/female",
        isDropDown:true,
        dropDownData:[
            {
                label:"Dresses",
                href:"/female/dresses"
            },
            {
                label:"Shirts",
                href:"/female/shirts"
            },
            {
                label:"Pents",
                href:"/female/pents"
            },
            {
                label:"Jackets",
                href:"/female/jackets"
            },
        ]
    
    },
    {
        label:"Male",
        href:"/male",
        isDropDown:true,
    
    },
    {
        label:"Kids",
        href:"/kids",
        isDropDown:false,
    
    },
    {
        label:"All Products",
        href:"/allproducts",
        isDropDown:false,
    
    }

]