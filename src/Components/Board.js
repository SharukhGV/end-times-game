import pantry from "./gamecompon/pantry.png"
import provision from "./gamecompon/provision.png"
import fishing from "./gamecompon/fishing.png"
import hazardspace from "./gamecompon/hazard space new.png"
import earthspace from "./gamecompon/season.png"

// import pantry from "./gamecompon/pantry.png"
// import pantry from "./gamecompon/pantry.png"


function Board(){

//     <!--End Times Survive HEading fonts-->
//     <link rel="preconnect" href="https://fonts.googleapis.com">
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//     <link href="https://fonts.googleapis.com/css2?family=Rubik+Beastly&display=swap" rel="stylesheet"> 

//     <!--Choose Wisely and Defend YOurself-->
//     <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap" rel="stylesheet"> 

// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@700&display=swap" rel="stylesheet"> 


return(
<>
  <section id="title">
  <h1>End Times - SURVIVE</h1>
  
  <h2>Choose Wisely and Defend Yourself</h2>
  
  </section>
  
  
  
  <section id="board">
  <table id="tablegame">
  <tbody>
    <div className="players" id="red"></div>
    <div className="players" id="blue"></div>
  
  <tr id="row1" className="oddrow">
  <td className="hazard"><img className="hazard7" src={hazardspace} alt="1"/></td> 
  <td className="water">2</td>  
  <td className="food">3</td>
  <td className="bsupply">4</td>
  <td className="dirt">5</td>
  <td className="provision"><img src={provision} alt="6"/></td>
  <td className="water">7</td>
  <td className="food">8</td>
  <td className="dirt">9</td>
  <td className="hazard"><img src={hazardspace} alt="10"/></td>
  </tr>
  <tr id="row2" className="evenrow">
    <td className="dirt">20</td> 
    <td className="provision"><img src={provision} alt="19"/></td>  
    <td className="dirt">18</td>
    <td className="water">17</td>
    <td className="bsupply">16</td>
    <td className="dirt">15</td>
    <td className="bsupply">14</td>
    <td className="dirt">13</td>
    <td className="pantry"><img src={pantry} alt="12"/></td>
    <td className="dirt">11</td>
    </tr>
    <tr id="row3" className="oddrow">
      <td className="dirt">21</td> 
      <td className="dirt">22</td>  
      <td className="food">23</td>
      <td className="plant">24</td>
      <td className="water">25</td>
      <td className="provision"><img src={provision} alt="26"/></td>
      <td className="dirt">27</td>
      <td className="plant">28</td>
      <td className="dirt">29</td>
      <td className="bsupply">30</td>
      </tr>
      <tr id="row4" className="evenrow">
        <td className="bsupply">40</td> 
        <td className="dirt">39</td>  
        <td className="provision"><img src={provision} alt="38"/></td>
        <td className="water">37</td>
        <td className="season"><img src={earthspace} alt="36"/></td>
        <td className="dirt">35</td>
        <td className="bsupply">34</td>
        <td className="food">33</td>
        <td className="plant">32</td>
        <td className="water">31</td>
        </tr>
        <tr id="row5" className="oddrow">
          <td className="dirt">41</td> 
          <td className="plant">42</td>  
          <td className="water">43</td>
          <td className="pantry"><img src={pantry} alt="44"/></td>
          <td className="plant">45</td>
          <td className="dirt">46</td>
          <td className="fishing"><img src={fishing} alt="47"/></td>
          <td className="fishing"><img src={fishing} alt="48"/></td>
          <td className="water">49</td>
          <td className="food">50</td>
          </tr>
          <tr id="row6" className="evenrow">
            <td className="dirt">60</td> 
            <td className="dirt">59</td>  
            <td className="bsupply">58</td>
            <td className="dirt">57</td>
            <td className="food">56</td>
            <td className="water">55</td>
            <td className="food">54</td>
            <td className="dirt">53</td>
            <td className="bsupply">52</td>
            <td className="dirt">51</td>
            </tr>
            <tr id="row7" className="oddrow">
              <td className="water">61</td> 
              <td className="plant">62</td>  
              <td className="dirt">63</td>
              <td className="dirt">64</td>
              <td className="provision"><img src={provision} alt="65"/></td>
              <td className="plant">66</td>
              <td className="water">67</td>
              <td className="provision"><img src={provision} alt="68"/></td>
              <td className="hazard"><img src={hazardspace} alt="69"/></td>
              <td className="dirt">70</td>
              </tr>
              <tr id="row8" className="evenrow">
                <td className="food">80</td> 
                <td className="water">79</td>  
                <td className="dirt">78</td>
                <td className="provision"><img src={provision} alt="77"/></td>
                <td className="dirt">76</td>
                <td className="dirt">75</td>
                <td className="food">74</td>
                <td className="dirt">73</td>
                <td className="water">72</td>
                <td className="dirt">71</td>
                </tr>
                <tr id="row9" className="oddrow">
                  <td className="dirt">81</td> 
                  <td className="dirt">82</td>  
                  <td className="bsupply">83</td>
                  <td className="dirt">84</td>
                  <td className="plant">85</td>
                  <td className="water">86</td>
                  <td className="dirt">87</td>
                  <td className="food">88</td>
                  <td className="plant">89</td>
                  <td className="food">90</td>
                  </tr>
                  <tr id="row10" className="evenrow">
                    <td className="hazard"><img src={hazardspace} alt="100"/></td> 
                    <td className="bsupply">99</td>  
                    <td className="provision"><img src={provision} alt="98"/></td>
                    <td className="dirt">97</td>
                    <td className="dirt">96</td>
                    <td className="pantry"><img src={pantry} alt="95"/></td>
                    <td className="bsupply">94</td>
                    <td className="dirt">93</td>
                    <td className="food">92</td>
                    <td className="hazard"><img src={hazardspace} alt="91"/></td>
                    </tr>
                  </tbody>
                </table>
                {/* <script src="ET FIRST INTERACTION.js"></script> */}
  
              </section>
              </>
)
}


export default Board