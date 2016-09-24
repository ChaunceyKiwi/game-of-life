function update(){
    for (var i = 0; i < len; i++)
        for (var j = 0; j < len; j++)
            voxelArrayFlagTemp[i][j] = voxelArrayFlag[i][j];

    for (var i = 1; i < len - 1; i++)
        for (var j = 1; j < len - 1; j++) {
            var neighNum = 0;

            for (var a = i - 1; a <= i + 1; a++)
                for (var b = j - 1; b <= j + 1; b++){
                    neighNum +=  voxelArrayFlag[a][b];
                }
            neighNum -= voxelArrayFlag[i][j];


            /* The rules of life game*/
            if(voxelArrayFlag[i][j] == 1){
                // will be dead if less than 2 or more than 3 neighbors
                if (neighNum <= 1 || neighNum >= 4) voxelArrayFlagTemp[i][j] = 0;
            }else{
                // will populate if has 3 neighbors
                if (neighNum == 3) voxelArrayFlagTemp[i][j] = 1;
            }
        }

    for (var i = 1; i < len - 1; i++)
        for (var j = 1; j < len - 1; j++) {
            if(voxelArrayFlagTemp[i][j] == 1 && voxelArrayFlag[i][j] == 0){
                addCube(i - shift, j - shift);
            }else if (voxelArrayFlagTemp[i][j] == 0 && voxelArrayFlag[i][j] == 1){
                removeCube(i - shift, j - shift);
            }
        }
}

function initialize(){
    for (var i = -5; i < 4; i++)
        addCube(i, i);
    addCube(0, 1);
}

function clearAll(){
    for (var i = 0; i < len; i++)
        for (var j = 0; j < len; j++){
            removeCube(i - shift, j - shift);
        }
}

function changePattern(val){
    if(val == 0){
        for (var i = 0; i < len; i++)
            for (var j = 0; j < len; j++){
                removeCube(i - shift, j - shift);
            }
    }else if(val == 1){
        clearAll();
        addCube(0, 1);
        addCube(1, 0);
        addCube(-1, -1);
        addCube(-1, 0);
        addCube(-1, 1);
    }else if(val == 2){
        clearAll();
        addCube(0, 1);
        addCube(0, -1);
        addCube(-1, 0);
        addCube(1, 0);
        addCube(0, 2);
        addCube(-1, 1);
        addCube(1, 1);
    }else if(val == 3){
        clearAll();
        addCube(0, 2);
        addCube(0, -2);
        for(var i = -2; i <= 2;i++)
            addCube(-2, i);
        for(var i = -2; i <= 2;i++)
            addCube( 2, i);
    }else if(val == 4){
        clearAll();
        for(var i = -5; i <= 4;i++)
            addCube(i, 0);
    }else if(val == 5){
        clearAll();
        addCube(-2,-1);
        addCube(-2, 1);
        addCube(-1, 2);
        addCube( 0, 2);
        addCube( 1, 2);
        addCube( 2, 2);
        addCube( 2, 1);
        addCube( 2, 0);
        addCube( 1,-1);
    }else if(val == 6){
        clearAll();
            for(var i = -2; i <= 2; i++){
                addCube(-1,i);
                addCube( 1,i);
            }
        addCube(-2, 1);
        addCube(-2, 2);
        addCube(-2, -3);
        addCube( 2, 1);
        addCube( 2, 2);
        addCube( 2, -3);
        addCube(-3, -1);
        addCube(-3, -2);
        addCube(-3, -3);
        addCube( 3, -1);
        addCube( 3, -2);
        addCube( 3, -3);
    }
}

function insert(){
    var pos = prompt("Please enter the coordinate of new cube", "0,0");
    var res = pos.split(",");
    if(res[0]> -shift && res[0]<shift && res[1] > -shift && res[1] < shift)
        addCube(parseInt(res[0],10), parseInt(res[1], 10));
    else
        alert("Range Exceed!");
}