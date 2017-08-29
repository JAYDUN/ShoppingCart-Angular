angular.module('app',[])
.controller('shoppingCart',function ($scope) {
    //check if cart is empty
    $scope.cartState={
        isEmpty:true
    };
    //init cart
    $scope.cartList=[];
    //Add item to cart
    $scope.cartAdd=function ($event) {
        var item={};
        item.img=$event.currentTarget.parentNode.children[0].getElementsByTagName('img')[0].src;
        item.name=$event.currentTarget.parentNode.children[1].innerText;
        item.price=$event.currentTarget.parentNode.children[2].getElementsByTagName('i')[0].innerText;
        item.quantity=1;
        item.totalPrice=item.price*item.quantity;
        item.checked=true;
        // console.log($event);
        // console.log($event.currentTarget.parentNode);
        // console.log(item);
        $scope.cartList.push(item);
        $scope.cartState.isEmpty=false;
        // console.log( $scope.cartList);
    }
    //decrease item quantities
    $scope.decrease=function($event,$index){
        var index= $scope.cartList[$index];
        if($event.currentTarget.parentNode.children[1].value>1){
            index.quantity--;
            index.totalPrice= index.quantity * index.price;
            index.totalPrice= Number((index.quantity * index.price).toFixed(2));
        }
    }
    //increase item quantities
    $scope.increase=function($event,$index){
            // $event.currentTarget.parentNode.children[1].value++;
            var index= $scope.cartList[$index];
            index.quantity++;
            index.totalPrice= Number((index.quantity * index.price).toFixed(2));


    }
    //totalQuantity
    $scope.totalQuantity=function(){
        var totalQuantity = 0;
        for(i = 0; i<$scope.cartList.length;i++){
            if($scope.cartList[i].checked==true){

                totalQuantity+=$scope.cartList[i].quantity;
            }
        }
        return totalQuantity;
    }
    //totalPrice
    $scope.totalPrice=function(){
        var totalPrice= 0;
        for(i = 0; i<$scope.cartList.length;i++){
            if($scope.cartList[i].checked==true){
                // console.log(typeof $scope.cartList[i].totalPrice);
                totalPrice+=$scope.cartList[i].totalPrice;
            }
        }

        return totalPrice.toFixed(2);
    }
    //delete item
    $scope.itemRemove=function ($index) {
        if(confirm("Are you sure you want to delete this item?")){
            $scope.cartList.splice($index,1)
        }
        if(  $scope.cartList.length==0){
            $scope.cartState.isEmpty=true;
        }
    }
    //select all
    $scope.allCheck=function () {

        for(i = 0; i<$scope.cartList.length;i++){
            // console.log($scope.cartList[i].checked);
            if($scope.cartList[i].checked!=true){
                return false;
            }

        }
        return true;
    }
    //  select item
    $scope.itemSelect=function($index){
        // console.log($scope.cartList[$index].checked);
        // if($scope.cartList[$index].checked==true){
        //     $scope.cartList[$index].checked=false;
        //     console.log($scope.cartList[$index].checked);
        //     return false;
        // }
        // if($scope.cartList[$index].checked==false){
        //     $scope.cartList[$index].checked=true;
        //     console.log($scope.cartList[$index].checked);
        //     return false;
        // }
        console.log(!$scope.cartList[$index].checked);
        return !$scope.cartList[$index].checked;
    }
    //Select all
    $scope.selectAll=function(target){
        if(target.checked==false){
            for(i = 0; i<$scope.cartList.length;i++){
               $scope.cartList[i].checked=false;
               console.log(  $scope.cartList[i].checked);
            }

            return false;
        }
        if(target.checked==true){
            for(i = 0; i<$scope.cartList.length;i++){
                $scope.cartList[i].checked=true;
                console.log(  $scope.cartList[i].checked);

            }
            return true;
        }
        // console.log(target.checked);
    }

})