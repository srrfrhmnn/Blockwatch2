import { useDispatch } from "react-redux"
import {delCoin} from "../features/coins/coinSlice"




export default function CoinItem({coin,  currentPrice}) {
    const dispatch = useDispatch();

    //console.log(currentPrice, "currentPrice in coinItem")
    

    return (
        <>
        <div className="coin">
            <div>
                {new Date(coin.createdAt).toLocaleDateString('en-US')}
            </div>
            <h1>{coin.coin}</h1>
            <h1>{currentPrice}</h1>
            <button onClick={() => dispatch(delCoin(coin.coin))} className="close">X</button>
        </div>
        </>
    )
}