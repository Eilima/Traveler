const apiKey =
  "7VoKtR0Xv74YUgYbPe7nxgm_bI9XAHVzv4dNKtb1l9jJlMClox8DGfhYys5NuYosox87UWytNI8-zUSXfyiQM-CvmUzzvETFg-s5l7xC4AxIToEOAygmMvlYPjkeX3Yx"; // Insert API key here.
const Yelp = {
  async search(term, location, sortBy) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.businesses) {
      return data.businesses.map((business) => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count,
        url: business.url,
      }));
    }
  },
};

export default Yelp;
