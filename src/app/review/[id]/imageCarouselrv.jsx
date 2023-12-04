import image1 from "/public/movies_pic/role_play.jpg";
import image2 from "/public/movies_pic/aquaman_and_the_lost_kingdom_ver11.jpg";
import image3 from "/public/movies_pic/arthur_the_king.jpg";

export const images = [image1, image2, image3];

const imageCarouselrv = (index) => images[index % images.length];

export default imageCarouselrv;
