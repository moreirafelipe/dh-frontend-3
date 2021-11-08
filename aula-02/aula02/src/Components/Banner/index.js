import './index.css';

const Banner = (props) => {
  return (
    <div className="info">
      <div className="details">
        <h2>{props.title}</h2>
        {props.children}
      </div>
      <div class="blur">
      </div>
    </div >
  )
}

export default Banner;