import Home from "../components/Home";
import {connect} from 'react-redux'
import {addToCart} from '../services/Action/action'

const mapDispatchToProps = dispatch =>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

const StateToProps=state=>({
    cardData:state
})

export default connect(StateToProps,mapDispatchToProps)(Home)
// export default Home;