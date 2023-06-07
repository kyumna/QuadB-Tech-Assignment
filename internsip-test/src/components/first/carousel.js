import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/img1.jpg'
import img2 from '../../images/img2.jpg'
import styles from './first.module.css'

function CarouselFadeExample() {
  return (
    <Carousel fade className={styles.carousel}>
      <Carousel.Item>
        <img
        id={styles.img3}
          className="d-block w-100 "
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        id={styles.img2}
          className="d-block w-100 h-10"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        id={styles.img3}
          className=" "
          src={img2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;