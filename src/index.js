module.exports = function check(str, bracketsConfig) {
  // your solution
    if ( str.length == 0 || str.length % 2 == 1){
        return false;
    }
    var open = [];
    var close = [];
    var arr = [];
    for ( var  i = 0 ; i < bracketsConfig.length ; i ++ ){
        open.push(bracketsConfig[i][0]);
        close.push(bracketsConfig[i][1]);
    }
    for ( var i = 0 ; i < str.length ; i ++ ){
        if ( open.indexOf(str[i]) >= 0 ){
            arr.push(str[i]);
        }
        if ( close.indexOf(str[i]) >= 0){
            if ( close.indexOf(str[i]) == open.indexOf(arr[arr.length-1])){
                arr.pop();
            }
        }
    }
    return arr.length == 0 ;
}
