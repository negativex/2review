import image1 from "/public/movies_pic/role_play.jpg";
import image2 from "/public/movies_pic/aquaman_and_the_lost_kingdom_ver11.jpg";
import image3 from "/public/movies_pic/arthur_the_king.jpg";
import image4 from "/public/movies_pic/candy_cane_lane_ver3.jpg";
import image5 from "/public/movies_pic/dream_scenario_ver3.jpg";
import image6 from "/public/movies_pic/finestkind_ver2.jpg";

export const images = [image1, image2, image3, image4, image5, image6];

const imageCarousel1 = (index) => images[index % images.length];

export default imageCarousel1;
