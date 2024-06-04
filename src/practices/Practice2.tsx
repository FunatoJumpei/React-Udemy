import React from "react";

export const Practice2 = () => {
    const getTotalFee = (num:number) : number => {
        const total = num * 1.1;
        return total
    }
    const onClickPractice1 = () => {
        console.log(getTotalFee(1000));
    };
    return(
        <div>
            <p>
                練習問題：戻り値の型指定
            </p>
            <button onClick={onClickPractice1}>練習問題2を実行</button>
        </div>
    )
}