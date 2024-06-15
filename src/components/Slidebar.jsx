function Slidebar(){
    return(
        <>
        <div
  id="carouselExampleCaptions"
  className="carousel slide"
  data-bs-ride="false"
>
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhJQI1TGqXoCfGJ7Cs9ssAP8EQH_cgx-dEw&s" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8456TD2c3HDSoYXpIk7Zlko8_bwFlhAOHhw&s" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="data:image/jpeg;base64,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" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

        </>
    )
}
export default Slidebar;