


//第一階段：新增課程購買記錄（優惠定價）
const purchaseRecords = []; // 儲存每筆記錄
function addPurchaseRecord(name,course){
    //防呆
    if(name==undefined || name=="" || typeof course !=="number"
        || course<0
    ){
        console.log(`輸入錯誤，請輸入有效的會員名稱和課程數量。`)
        return;
    }

    //課程優惠單價
    let coursePrice = 0 ;
    if(course<= 10){
        coursePrice = 1500
    }else if(course<=20){
        coursePrice = 1300
    }else{
        coursePrice =1100
    }
    // console.log(coursePrice)驗證
    //總金額計算
    let totalPrice = course*coursePrice;
    // console.log(totalPrice)驗證
    //儲存每筆資料
    purchaseRecords.push({
        name:name,
        course:course,
        coursePrice:coursePrice,
        totalPrice:totalPrice
    })
    console.log(`新增購買記錄成功！會員${name}購買${course}堂課，總金額為${totalPrice} 元。`)
}



//第二階段：計算目前的總營業額

function  calculateTotalPrice(){
    let revenue = 0;
    purchaseRecords.forEach(function(record){
        revenue += record.totalPrice
        
    })
    console.log(`目前總營業額為${revenue}`)
}

//第三階段：篩選出還沒有購課的會員
const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
function filterNoPurchaseMember(){
    const purchaseMember = [];
    purchaseRecords.forEach(function(record){
        purchaseMember.push(record.name)
    })

    const noPurchaseMember = members.filter(function(member){
        return purchaseMember.includes(member) === false;
    })
    console.log(` 未購買課程的會員有${noPurchaseMember}`)

    
}



addPurchaseRecord("Alice", 4); 
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");
calculateTotalPrice();
filterNoPurchaseMember();






