
function difference(arr,n)
{
 
    // Initialize sums of diagonals
    // x === sumDiagnoalOne
    // y === sumDiagnoalTwo
    let x = 0, y = 0;
 
    for (let i = 0; i < n; i++)
    {
        x += arr[i][i];
        y += arr[i][n-i-1];
    }

    //Math.abs() function returns the absolute value of a number.
    // Absolute difference of the sums returns positive or zero result
    return Math.abs(x - y);
}

    let n = 3;
    let arr = [[11, 2, 4],
        [4 , 5, 6],
        [10, 8, -12],];

    console.log(difference(arr, n));

    // let n = 2;
    // let arr = [[11, 2, 4],
    //     [4 , 5, 6]];

    // console.log(difference(arr, n));