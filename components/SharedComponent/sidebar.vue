<template>
    <div class="sidebar">
        <div class="sidebar-header">
            <h2><i class="bi bi-list"></i> Shop by Category</h2>
        </div>
        <div class="menu-list">
            <div class="list">
                <li><img width="25" class="sidebar-Icons" src="img/islamicicon.png" alt="" /> Islamic Product</li>
                <span><i class="bi bi-arrow-right"></i></span>
            </div>
            <div class="list">
                <li><img width="25" class="sidebar-Icons" src="img/groceryicon.png" alt="" /> Grocery </li>
                <span><i class="bi bi-arrow-right"></i></span>
            </div>
            <div class="list">
                <li><img width="25" class="sidebar-Icons" src="img/fasionicon.png" alt="" /> Fashion </li>
                <span><i class="bi bi-arrow-right"></i></span>
            </div>
            <div class="list">
                <li><img width="25" class="sidebar-Icons" src="img/electronicicon.png" alt="" /> Electronics </li>
                <span><i class="bi bi-arrow-right"></i></span>
            </div>
            <div class="list">
                <li><img width="25" class="sidebar-Icons" src="img/babycareicon.png" alt="" /> Baby Care </li>
                <span><i class="bi bi-arrow-right"></i></span>
            </div>
            <div class="list">
                <li><img width="25" class="sidebar-Icons" src="img/cosmaticicon.png" alt="" /> Cosmetics </li>
                <span><i class="bi bi-arrow-right"></i></span>
            </div>
            <div class="list">
                <li><img width="25" class="sidebar-Icons" src="img/furntureicon.png" alt="" /> furniture </li>
                <span><i class="bi bi-arrow-right"></i></span>
            </div>
            <div class="list">
                <li><img width="25" class="sidebar-Icons" src="img/shoesicon.png" alt="" /> Shoes </li>
                <span><i class="bi bi-arrow-right"></i></span>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.sidebar {
    width: 19%;
    height: 70vh;
    border: .01px solid rgb(233, 233, 233);
    padding: 10px 20px;
    border-radius: 5px;
    position: -webkit-sticky;
    position: sticky;
    top: 220px;
    margin-bottom: 60px;
    z-index: -1;
    cursor: pointer;
}

.sidebar-header {
    border-bottom: .5px solid #e6e6e6;
}

.sidebar-header h2 {
    margin: 10px 0px;
}

.list{
    display: flex;
    justify-content: space-between;
    border-bottom: .1px solid #f1f1f1f1;
    margin: 10px 0px;
}
.list li {
    list-style: none;
    font-size: 18px;
    margin-bottom: 10px;
    transition: all .4s;
    cursor: pointer;
}
.list span{
    margin-top: 10px;
    color: gainsboro;
}
</style>
