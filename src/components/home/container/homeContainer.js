import Home from './../component/homeComponent'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { registerUser } from './../reducer/actions'

const mapStateToProps = state => ({
  flag: state.flagReducer.flag,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  registerUser,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
