export const CardsData=[
    {
        title:"Sales",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue:70,
        value: "25,970",
        series: [
            {
                name:"Sales",
                data:[31,48,28,51,42,109,100],
            },
        ],      
    },

    {
        title:"Revenue",
        color: {
            backGround: "linear-gradient(180deg, #ff919d 0%, #fc929D 100%)",
            boxShadow: "0px 10px 20px 0px #fdc0c7",
        },
        barValue:80,
        value: "14,270",
        series: [
            {
                name:"Revnue",
                data:[10,100,50,70,80,30,40],
            },
        ],      
    },

    {
        title:"Expenses",
        color: {
            backGround: "linear-gradient(rgb(248,212,154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #f9d59b",
        },
        barValue:60,
        value: "4,270",
        series: [
            {
                name:"Expenses",
                data:[10,25,15,30,12,15,20],
            },
        ],      
    }


];

export const OrderTablesData=[
    {
        id: 1,
        cName: "Carla", 
        pName:"Dr. Tim", 
        sType:"Physician", 
        date: "2 March 2023",
        status:"Inompleted",
        cost: "Rs." + 500,

    },
    {
        id: 2,
        cName: "Yash", 
        pName:"Dr. Deny", 
        sType:"Therapist", 
        date: "1 March 2023",
        status:"Completed",
        cost: "Rs." + 500,

    },
    {
        id: 3,
        cName: "Aftab", 
        pName:"Tom", 
        sType:"Pathologist", 
        date: "1 March 2023",
        status:"Completed",
        cost: "Rs." + 500,

    },
    {
        id: 4,
        cName: "Imran Khan", 
        pName:"Ahmed", 
        sType:"Compounder", 
        date: "27 Feb 2023",
        status:"Completed",
        cost: "Rs." + 500,

    },
    {
        id: 5,
        cName: "Carla", 
        pName:"Dr.Tim", 
        sType:"Physician", 
        date: "26 Feb 2023",
        status:"Completed",
        cost: "Rs." + 500,

    },
]