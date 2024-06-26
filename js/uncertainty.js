function main() {
    const c_g = 9.7915;  // gravitational constant in m/s^2
    const c_O_m = 0.05773;  // original mass in kilograms
    const c_m = 9.3;  // mass in kilograms
    const c_O_b = 0.011547;  // original beam width in meters
    let c_b = 24.68;  // beam width in meters
    const c_O_d = 0.00284809;  // original beam thickness in meters
    let c_d = 0.9128;  // beam thickness in meters
    let c_a_2a = 0.01268;  // angle in radians
    const c_O_a_2a = 0;  // original angle uncertainty (will be input)
    const c_O_l = 0.28867;  // original beam length in meters
    let c_l = 210.5;  // beam length in meters
    const c_a = 12.32;  // mass width in meters

    // Input operations
    console.log("输入的数据请输入毫米或者克,输入角度时请各放大10000倍后输入");
    c_b = parseFloat(prompt("请输入截面宽度b (mm): "));
    c_d = parseFloat(prompt("请输入悬臂梁厚度d (mm): "));
    // 
     c_O_b = parseFloat(prompt("请输入悬臂梁厚度的不确定度"));

    c_a_2a = parseFloat(prompt("请输入角度: "));
    let c_O_a_2a_input = parseFloat(prompt("请输入角度的相对不确定度* 10000: "));
    c_l = parseFloat(prompt("请输入悬臂长度l (mm): "));

    // Perform calculations

    c_O_b=c_O_b * 10000;
    let c_B = (c_O_b  / c_b)*(c_O_b  / c_b);
    c_O_d=c_O_d * 10000;
    let c_D = (c_O_d / c_d)*(c_O_d / c_d) * 9;
     c_O_l=c_O_l * 10000;
    let c_L = (c_O_l / (c_l - c_a))*(c_O_l / (c_l - c_a)) * 4;
    let c_A_2A =(c_O_a_2a_input / c_a_2a)*(c_O_a_2a_input / c_a_2a);
    c_O_m=c_O_m * 10000;
    let c_M = (c_O_m / c_m)*(c_O_m / c_m);
    let c_sum = math.sum(c_B, c_D, c_L, c_A_2A, c_M);
    console.log(c_sum.toFixed(6));

    console.log("结果为未开根号且放大了100000000的值");
}

function calculateUncertainty(c_l, c_b, c_d, c_a_2a, c_O_a_2a_input, c_m) {
    var c_g = 9.7915;  // gravitational constant in m/s^2
    var c_O_m = 0.05773;  // original mass in kilograms
    // const c_m = 9.3;  // mass in kilograms
    var c_O_b = 0.011547;  // original beam width in meters
    // let c_b = 24.68;  // beam width in meters
    var c_O_d = 0.00284809;  // original beam thickness in meters
    // let c_d = 0.9128;  // beam thickness in meters
    // let c_a_2a = 0.01268;  // angle in radians
    var c_O_a_2a = 0;  // original angle uncertainty (will be input)
    var c_O_l = 0.28867;  // original beam length in meters
    // let c_l = 210.5;  // beam length in meters
    var c_a = 12.32;  // mass width in meters

    //let c_B = math.pow((c_O_b * 10000) / c_b, 2);
    //let c_D = math.pow((c_O_d * 10000) / c_d, 2) * 9;
    //let c_L = math.pow((c_O_l * 10000) / (c_l - c_a), 2) * 4;
    //let c_A_2A = math.pow(c_O_a_2a_input / c_a_2a, 2);
    //let c_M = math.pow((c_O_m * 10000) / c_m, 2);
    c_O_b=c_O_b * 10000;
    let c_B = (c_O_b  / c_b)*(c_O_b  / c_b);
    c_O_d=c_O_d * 10000;
    let c_D = (c_O_d / c_d)*(c_O_d / c_d) * 9;
    c_O_l=c_O_l * 10000;
    let c_L = (c_O_l / (c_l - c_a))*(c_O_l / (c_l - c_a)) * 4;
    let c_A_2A =(c_O_a_2a_input / c_a_2a)*(c_O_a_2a_input / c_a_2a);
    c_O_m=c_O_m * 10000;
    let c_M = (c_O_m / c_m)*(c_O_m / c_m);

    const c_sum = math.sum(c_B, c_D, c_L, c_A_2A, c_M).toFixed(6);

    console.log(`The sum is ${c_sum} (/100000000)`);

    return {
        "result": c_sum,
    }
}
