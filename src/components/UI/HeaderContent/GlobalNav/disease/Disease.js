import React, { Component } from 'react';

import TextFileReader from '../../../../TextFileReader/TextFileReader';
import classes from './Disease.css';

class Disease extends Component {
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return (
      <div className={classes.Disease}>
      <h1>Skin Cancer</h1>
      <h2>Prevention:</h2>
      <ol>
        <li>Seek the shade, especially between 10 AM and 4 PM.</li>
        <li>Don't get sunburned.</li>
        <li>Avoid tanning and never use UV tanning beds.</li>
        <li>Cover up with clothing, including a broad-brimmed hat and UV-blocking sunglasses.</li>
        <li>Use a broad spectrum (UVA/UVB) sunscreen with an SPF of 15 or higher every day. For extended outdoor activity, use a water-resistant, broad spectrum (UVA/UVB) sunscreen with an SPF of 30 or higher.</li>
        <li>Apply 1 ounce (2 tablespoons) of sunscreen to your entire body 30 minutes before going outside. 7.Reapply every two hours or after swimming or excessive sweating.</li>
        <li>Keep newborns out of the sun. Sunscreens should be used on babies over the age of six months.</li>
        <li>Examine your skin head-to-toe every month.</li>
      </ol>

    <h2>Causes:</h2>
    <ol>
      <li>Ultraviolet (UV) radiation from the sun is the number one cause of skin cancer, but UV light from tanning beds is just as harmful. Exposure to sunlight during the winter months puts you at the same risk as exposure during the summertime.</li>
      <li>Cumulative sun exposure causes mainly basal cell and squamous cell skin cancer, while episodes of severe blistering sunburns, usually before age 18, can cause melanoma later in life. Other less common causes are repeated X-ray exposure, scars from burns or disease, and occupational exposure to certain chemicals.See a dermatologist at least once a year for a professional skin exam.</li>
    </ol>
        <h1>Diabetic Retinopathy</h1>
        <h1>Prevention:</h1>
      <ol>
        <li>Get a comprehensive dilated eye examination from your ophthalmologist at least once a year. In its early stages, diabetic eye disease often has no symptoms.</li>
        <li>Control your blood sugar.</li>
        <li>Maintain healthy blood pressure and cholesterol levels.</li>
        <li>Quit smoking.</li>
        <li>Exercise.</li>
      </ol>

      <h2>Causes:</h2>
        <ol>
          <li>Diabetic retinopathy is a condition that occurs in people who have diabetes. It causes progressive damage to the retina, the light-sensitive lining at the back of the eye. Diabetic retinopathy is a serious sight-threatening complication of diabetes.
        </li>
          <li>Diabetes interferes with the body's ability to use and store sugar (glucose). The disease is characterized by too much sugar in the blood, which can cause damage throughout the body, including the eyes.
        </li>
          <li>Over time, diabetes damages the blood vessels in the retina. Diabetic retinopathy occurs when these tiny blood vessels leak blood and other fluids. This causes the retinal tissue to swell, resulting in cloudy or blurred vision. The condition usually affects both eyes. The longer a person has diabetes, the more likely they will develop diabetic retinopathy. If left untreated, diabetic retinopathy can cause blindness.
        </li>
        </ol>
      </div>
    );
  }
}

export default Disease;