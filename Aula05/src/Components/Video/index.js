import './index.css';

const Video = ({ url, title, description }) => {
  return (
    <article className="grid-item">
      <h3>{title}</h3>
      <iframe width="100%" height="100%" src={url} title={title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>{description}</p>
    </article>
  )
}

export default Video;