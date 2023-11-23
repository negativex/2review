import image1 from "/public/movies_pic/aquaman_and_the_lost_kingdom_ver11.jpg";
import image2 from "/public/movies_pic/arthur_the_king.jpg";
import image4 from "/public/movies_pic/candy_cane_lane_ver3.jpg";
import image3 from "/public/movies_pic/dream_scenario_ver3.jpg";

export const images = [image1, image2, image3, image4];

const imageCarousel2 = (index) => images[index % images.length];

export default imageCarousel2;
