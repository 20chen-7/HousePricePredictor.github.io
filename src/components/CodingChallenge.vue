<template>
  <div class="ml">
    <!-- Here is the title and one information icon for instructions -->
    <div class="title-box">
      <h1>House Price Predictor</h1>
      <div class="model-intro">
          <p class="model-intro-para">Here is the list of House Price for actual/predicted date.</p>      
        </div>
    </div>
    <!-- Here is the content of the calculator -->
    <div class="content">
        <div class="input-row">   
          <div class="state">
            <label class="typo__label" for="state">States:</label>
            <multiselect v-model="selectedStates" tag-placeholder="Add this as new tag" placeholder="Select a states"
                :options="statesOptions || []" :multiple="true" :taggable="true" @tag="addStates" :close-on-select="false" ></multiselect>
          </div>
          <div class="country"> 
            <label class="typo__label" for="country">Countries:</label>
            <multiselect v-model="selectedCountry" tag-placeholder="Add this as new tag" placeholder="Select a country" label="CountryName" track-by="CountryName"
              :options="countryOptions || []" :multiple="true" :taggable="true" @tag="addCountries" :close-on-select="false" ></multiselect>         
          </div>
          <div class="date-range">
            <label for="dateRange">Date Range:</label>
            <VueDatePicker v-model="selectedDateRange" placeholder="Select Monthly Range" month-picker range multi-calendars/>
          </div>
          <div class="search-btn"> 
            <button class="bouncy-focus" @click="getPredicted(selectedStates, selectedCountry, selectedDateRange)">
              <svg height="24" width="24" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 70 70">
                <g>
                  <path d="M66.829,51.329L56.593,41.093c1.479-3.56,2.248-7.387,2.248-11.282c0-16.222-13.198-29.42-29.421-29.42
                    C13.198,0.391,0,13.589,0,29.811c0,16.223,13.198,29.421,29.42,29.421c4.318,0,8.518-0.932,12.37-2.724l9.931,9.932
                    c2.019,2.019,4.701,3.13,7.556,3.13s5.539-1.112,7.557-3.132c2.016-2.015,3.127-4.698,3.127-7.553
                    C69.96,56.032,68.849,53.348,66.829,51.329z M62.588,62.198c-0.914,0.915-2.113,1.372-3.312,1.372s-2.397-0.457-3.313-1.372
                    L42.798,49.031c-3.794,2.646-8.403,4.201-13.378,4.201C16.485,53.232,6,42.746,6,29.811s10.485-23.42,23.42-23.42
                    s23.421,10.485,23.421,23.42c0,4.57-1.314,8.832-3.578,12.438l13.325,13.325C64.418,57.403,64.418,60.369,62.588,62.198z"/>
                  <path d="M29.42,13.061c-9.235,0-16.749,7.514-16.749,16.75s7.514,16.75,16.749,16.75c9.236,0,16.75-7.514,16.75-16.75
                    S38.656,13.061,29.42,13.061z M29.42,40.561c-5.927,0-10.749-4.822-10.749-10.75s4.822-10.75,10.749-10.75
                    c5.928,0,10.75,4.822,10.75,10.75S35.348,40.561,29.42,40.561z"/>
                </g>
              </svg>

            </button>
          </div>
        </div>
        <div class="toggle-row">
          <div class="toggle-container" @click="isPredicted = !isPredicted">
            <label for="isPredicted">Forecast</label>
            <div class="toggle-switch" :class="{ 'active': isPredicted }">
              <div class="toggle-knob" :class="{ 'move-right': isPredicted }"></div>
            </div>
          </div>
        </div>
        <div class="chart-row">
          <div class="chart-container">
            <line-chart ref='lineChart' v-if="chartData.labels && chartData.datasets.length" :data="chartData" :options="options"></line-chart>
          </div>
          <div class="reset-btn-container">
              <button class='btn reset' v-if="chartData.labels && chartData.datasets.length" @click="resetZoom()">Reset Zoom</button>
            </div>
        </div>
        <div class="chart-row" v-if="showBarChart">
          <div class="chart-container">
            <bar-chart :data="barChartData" :options="barChartOptions"></bar-chart>
          </div>
        </div>
        <div class="summary" v-if="showBarChart">
            <table class="content-table">
              <thead>
                <tr class="table-header">
                      <th>State Name</th>
                      <th>Region Name</th>
                      <th>Size Rank</th>
                      <th>Mean</th>
                      <th>Median</th>
                      <th>Skewness</th>
                      <th>Deviation</th>
                      <th>Percentiles</th>
                  </tr>
              </thead>
              <tbody class="table-body">
                  <tr v-for="(item, index) in statisticalData" :key="index">
                  <td>{{ item.state }}</td>
                  <td>{{ item.country }}</td>
                  <td>{{ item.sizeRank }}</td>
                  <td>{{ item.mean }}</td>
                  <td>{{ item.median }}</td>
                  <td>{{ item.skewness }}</td>
                  <td>{{ item.deviation }}</td>
                  <td>{{ item.percentiles }}</td>
                  </tr> 
              </tbody>
            </table>
        </div>
        <div class="final-row">
          <div class="download-btn-container">
            <button class='btn download' v-if="chartData.labels && chartData.datasets.length" @click="downloadChartData()">Download Data</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

import { Line } from 'vue-chartjs';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale, BarElement } from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom';
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, LinearScale, CategoryScale, zoomPlugin, BarElement)

import Multiselect from 'vue-multiselect'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

export default {
  name: 'CodingChallenge',
  props: {},
  components: {
    LineChart: Line,
    BarChart: Bar,
    Multiselect,
    VueDatePicker,
   },
  data(){
    console.log('here')
    return {
      chartData: {},
      statesOptions: ['CO','CA'],
      countryOptions: [{CountryName:'Denver',StateName:'CO'}],
      selectedStates: [],
      selectedCountry: [],
      selectedDateRange: [],
      predictions: [],
      options:{},
      loaded: false,
      isPredicted: false,
      barChartData: null,
      selectedMonth: [],
      months: [],
      showBarChart: false,
      barChartOptions:{},
      statisticalData: [],
      isZoomed:false,
      showInstructionDialog:false,
  }}, 
  
  methods: {
    toggle() {
        this.isPredicted = !this.isPredicted;
    },
    resetZoom(){
      this.$refs.lineChart.chart.resetZoom();
    },
    
    fetchStates() {
      fetch('http://localhost:5001/getStates',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
      })
        .then(response => response.json())
        .then(data => {
          this.statesOptions = data; 
        })
        .catch(error => console.error('Error fetching States:', error));
    },
    addStates(newState) {
      this.selectedStates.push(newState)
    },
    addCountries(newCountry){
      const stateAdded = this.countryOptions.some(option => option.countryName === newCountry);
      this.selectedCountry.push({StateName: stateAdded, CountryName: newCountry})
    },
    fetchCountries() {
      if (this.selectedStates.length > 0) {
        fetch('http://localhost:5001/get_countries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({ selectedStates: this.selectedStates })
        })
        .then(response => response.json())
        .then(data => {
          this.countryOptions = data;
        })
        .catch(error => console.error('Error fetching country data:', error))
      }
    },
    fetchPredictions() {
      fetch('http://localhost:5001/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify({ selectedCountry: this.selectedCountry, selectedDateRange: this.selectedDateRange, isPredicted: this.isPredicted})
        })
        .then(response => response.json())
        .then(data => {
          console.log('predictions fetch', data.predictions)
          this.predictions = data.predictions;
          this.generateChartData(data.predictions);
        })
        .catch(error => console.error('Error fetching country data:', error))
    },
    getPredicted() {
      this.fetchPredictions();
      this.loaded = !this.loaded;

    },
    getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#'; 
      for (let i = 0; i < 6; i++) { 
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color; // Return the generated color
    },
    generateChartData(predictions){
      if (this.selectedCountry.length > 0) {
        const countriesName = this.selectedCountry.map(({ CountryName, StateName, SizeRank }) => {
          return `${CountryName},${StateName},${SizeRank}`
        })
      const groupedData = predictions.map((data, index) => ({
        label: countriesName[index],
        data: data.map(item => item.PredictedPrice),
        borderColor: this.getRandomColor(), 
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true
      }))
      const labels = predictions[0].map(item => item.Date);
      this.chartData = {
        labels: labels, 
        datasets: groupedData 
      };
      this.months = labels;
      this.options = {
        responsive: true,
        maintainAspectRatio: 1.5,
        scales: {
              x: {
                grid: {
                  display: true,
                  color: 'rgba(211, 211, 211, 1)',
                  lineWidth: 0.5,
                },
                ticks: {
                  color: 'rgba(211, 211, 211, 1)',
                  font: {
                    size: 14,
                    weight: 'bold'
                  },
                  padding: 10,
                  autoSkip: true,
                  maxRotation: 45,
                  minRotation: 0
                }
              },
              y: {
                grid: {
                  display: true,
                  color: 'rgba(211, 211, 211, 1)',
                  lineWidth: 0.5,
                },
                ticks: {
                  color: 'rgba(211, 211, 211, 1)',
                  font: {
                    size: 14,
                    weight: 'bold'
                  },
                  padding: 10,
                  autoSkip: true,
                  maxRotation: 45,
                  minRotation: 0
                }
              }
        },
        plugins: {
          legend: {
            labels: {
              color: 'black',
            }
          },
          title: {
            display: true,
            text: 'House Price vs Date Graph',
            color: 'black', 
            font: {
              size: '20vmin',
            }
          },
          zoom: {
            zoom: {
              wheel: {
                enabled: true, 
              },
              pinch: {
                enabled: false,  
              },
              mode: 'xy',
            }
         } 
        },
        onClick: (e) => {
            try{
              const activePoint = this.$refs.lineChart.chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false);
              if(!this.selectedMonth.includes(activePoint[0].index)){
                this.selectedMonth.push(activePoint[0].index);
                this.updateBarChart(this.selectedMonth);
              }
            }catch(e){
              console.warn('Please click the data point!')
            }  
          }
        }
      }
    },
    downloadChartData() {
      const data = this.chartData;  // Get the chart data
      const jsonData = JSON.stringify(data);  // Convert data to JSON
      const blob = new Blob([jsonData], { type: 'application/json' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'chartData.json';  // Name of the file
      link.click();
    },
    safeParse(str){
      let res = {}
      try{
        res = JSON.parse(JSON.stringify(str));
        return res;
      }catch(e){
        console.error('Incorrect safe parse, error:',e)
      }
    },
    updateBarChart(selectedMonthIdx) {
      const selectedMonths = [...new Set(selectedMonthIdx)];
      selectedMonths.sort();
      let barChartData = [];
      try{
        const chartData = this.safeParse(this.chartData.datasets);
        chartData.map((item) => {
          let currentCountryData = [];
          for(let i = 0; i < selectedMonths.length; i++){
              const monthIdx = selectedMonths[i]; 
              currentCountryData.push(item.data[monthIdx])
          }
          barChartData.push({
            label: item.label,
            data: currentCountryData,
            backgroundColor: item.borderColor,
            fill: true,

          });
        });
        const months = this.safeParse(this.months)
        const monthName = selectedMonthIdx.map((index) => {
          return months[index];
        })
        this.barChartData = {
          labels: monthName, 
          datasets: barChartData
        };
        this.showBarChart = true;
        this.barChartOptions = {
              responsive: true,
              maintainAspectRatio: 1.5,
              scales: {
                    x: {
                      grid: {
                        display: true,
                        color: 'rgba(211, 211, 211, 1)',
                        lineWidth: 0.5,
                      },
                      ticks: {
                        color: 'rgba(211, 211, 211, 1)',
                        font: {
                          size: 14,
                          weight: 'bold'
                        },
                        padding: 10,
                        autoSkip: true,
                        maxRotation: 45,
                        minRotation: 0
                      }
                    },
                    y: {
                      grid: {
                        display: true,
                        color: 'rgba(211, 211, 211, 1)',
                        lineWidth: 0.5,
                      },
                      ticks: {
                        color: 'rgba(211, 211, 211, 1)',
                        font: {
                          size: 14,
                          weight: 'bold'
                        },
                        padding: 10,
                        autoSkip: true,
                        maxRotation: 45,
                        minRotation: 0
                      }
                    }
              },
              plugins: {
                legend: {
                  labels: {
                    color: 'black',
                  }
                },
                title: {
                  display: true,
                  text: 'House Price of Selected Regions vs Selected Date Graph',
                  color: 'black', 
                  font: {
                    size: '20vmin',
                  }
                },
              }
        }
        this.summary();
      }catch(e){
        console.log('Error in parsing chartdata')
      }
    },
    getPercentile(sortedData, percentile) {
      const index = (percentile / 100) * (sortedData.length - 1);
      if (Number.isInteger(index)) {
        return sortedData[index];
      }else {
        const lowerIndex = Math.floor(index);
        const upperIndex = Math.ceil(index);
        const fraction = index - lowerIndex;
        return sortedData[lowerIndex] + fraction * (sortedData[upperIndex] - sortedData[lowerIndex]);
      }
    },
    calculateStats(dataset) {
      // <td>{{ item.state }}</td>
      //             <td>{{ item.country }}</td>
      //             <td>{{ item.sizeRank }}</td>
      //             <td>{{ item.mean }}</td>
      //             <td>{{ item.median }}</td>
      //             <td>{{ item.skewness }}</td>
      //             <td>{{ item.deviation }}</td>
      //             <td>{{ item.percentiles }}</td>
      const [ country, state, sizeRank] = dataset.label.split(',')
      const data = dataset.data;
      const n = data.length;
      const sortedData = [...data].sort((a, b) => a - b);
      const sum = data.reduce((acc, val) => acc + val, 0);
      const mean = sum / n;
      const median = (n % 2 === 0)? (sortedData[n / 2 - 1] + sortedData[n / 2]) / 2: sortedData[Math.floor(n / 2)];
      const squaredDifferences = data.map(x => Math.pow(x - mean, 2));
      const variance = squaredDifferences.reduce((a, b) => a + b, 0) / n;
      const stdDev = Math.sqrt(variance);
      const sumCubedDeviations = data.reduce((acc, val) => acc + Math.pow(val - mean, 3),0);
      const skewness = (sumCubedDeviations / n) / Math.pow(stdDev, 3);
      const q1 = this.getPercentile(sortedData, 25);
      const q2 = this.getPercentile(sortedData, 50);
      const q3 = this.getPercentile(sortedData, 75);

      return {
        country,
        state,
        sizeRank,
        mean,
        median,
        skewness,
        deviation:variance,
        percentiles: [q1,q2,q3]
        }
    },
    summary(){
      if (!this.barChartData.datasets.length) {
        return [];
      }
      const barChartData = this.safeParse(this.barChartData.datasets)
      this.statisticalData = barChartData.map((dataset) => {
        return this.calculateStats(dataset);
      });
      
    },
  },
  mounted() {
    this.fetchStates();  // Fetch countries when the component is mounted
  },
  watch: {
    selectedStates() {
      this.countryOptions = this.fetchCountries();
    },
  },
  
}
</script>
<style scoped>
.option-profit-calculator{
  text-align: center;
  background-color: #fff;
}
/** title */
.title-box{
  padding: 2vh 10vw;
  margin: auto 20vw;
  background-color: #fff;
  border-radius: 4vmin;
  color: #429a80;
  position: relative;
  overflow: hidden;
  z-index: 10;
}
.title-box::before{
  content: '';
  width: 200vw;
  height: 200vh;
  background-color: #fff;
  position: absolute;
  left: -70vw;
  top: -91vh;
  background-image: conic-gradient(transparent, #40b883, transparent 30%);
  z-index: -2;
  animation: rotate 3s linear infinite;
}
@keyframes rotate {
  to{
    transform: rotate(360deg);
  }
} 
.title-box::after{
  content: '';
  position: absolute;
  inset: 0.5vmin;
  background-color:#fff;
  border-radius: 4vmin;
  z-index: -1;
}
h1 {
  font-size: 3vmin;
}
p {
  font-size: 2vmin
}
.intro{
  width: 2vmin;
  height: 2vmin;
}
.model-intro-para{
  margin-bottom: auto;
}

/* strike details */
.content {
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
/* input & chart */
/* first row */
.input-row{
  display: flex;
  flex-direction: row;
}
.state{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  width: 300px;
}
.country{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  width: 350px;
}
.date-range{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  width: 380px;
}
.date-range label{
  width: 150px;
}
.search-btn{
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
@import "https://unpkg.com/open-props/easings.min.css";

@layer demo {
  .bouncy-focus {
    width: 40px;
    height: 40px;
    --_focus-size: 0;
    --_focus-duration: .2s;
    --_focus-ease: var(--ease-out-5);
    
    box-shadow: 0 0 0 var(--_focus-size) Highlight;
    border-radius: 50%;
    border-style: hidden;
    background-color: transparent;
    @media (prefers-reduced-motion: no-preference) {
      transition: box-shadow var(--_focus-duration) var(--_focus-ease);
    }

    &:not(:active):is(:focus-visible,:hover) {
      --_focus-size: 1px;
      --_focus-duration: .5s;
      --_focus-ease: var(--ease-elastic-out-3);
      
      @supports (transition-timing-function: linear(0,1)) {
        --_focus-ease: var(--ease-spring-3);
      }
    }
  }
}
@layer demo.support {
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html {
    block-size: 100%;
    color-scheme: dark light;
  }

  body {
    min-block-size: 100%;
    font-family: system-ui, sans-serif;

    display: grid;
    place-content: center;
  }
  
  section {
    display: flex;
    gap: 3rem;
    
    & button {
      background: none;
      border: none;
      padding: 0;
      inline-size: 2rem;
      aspect-ratio: 1;
    }
    
    & svg {
      inline-size: 2rem;
      block-size: 2rem;
      stroke: currentColor;
      fill: none;
    }
  }
}
/* Container for the toggle */
.toggle-container {
  display: flex;
  justify-content: flex-end;
  /* background-color: #424242; */
  align-items: center;
  cursor: pointer;
  border-radius: 2px;
  padding: 10 20px;
}

.toggle-switch {
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  background-color: #d1d5db; 
  border-radius: 9999px; 
  padding: 3px; 
  transition: background-color 0.3s ease-in-out;
  margin-left: 10px;
  
}
.toggle-switch.active {
  background-color: #2f3ea2;
}
.toggle-knob {
  background-color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* shadow-md */
  transition: transform 0.3s ease-in-out;
}

.toggle-knob.move-right {
  transform: translateX(14px); /* translate-x-6 */
}
.chart-container{
  width: 900px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.chart-row{
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
}

.btn{
	position: relative;
	font: inherit;
	background-color: #f0f0f0;
	border: 0;
	color: #242424;
	border-radius: 10px;
	font-size: 10px;
	padding: 10px 20px;
	font-weight: 300;
	text-shadow: 0 5px 0 #fff;
	box-shadow: inset 0 0.0625em 0 0 #f4f4f4, 0 0.0625em 0 0 #efefef,
		0 0.125em 0 0 #ececec, 0 0.25em 0 0 #e0e0e0, 0 0.3125em 0 0 #dedede,
		0 0.375em 0 0 #dcdcdc, 0 0.425em 0 0 #cacaca, 0 0.425em 0.5em 0 #cecece;
	transition: 0.25s ease;
	touch-action: manipulation;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	cursor: pointer;

	&:active,
	&:hover {
		transform: translateY(0.225em);
		box-shadow: inset 0 0.03em 0 0 #f4f4f4, 0 0.03em 0 0 #efefef,
			0 0.0625em 0 0 #ececec, 0 0.125em 0 0 #e0e0e0, 0 0.125em 0 0 #dedede,
			0 0.2em 0 0 #dcdcdc, 0 0.225em 0 0 #cacaca, 0 0.225em 0.375em 0 #cecece;

		&:after {
			height: calc(100% + 0.225em);
		}
	}

	&:after {
		position: absolute;
		content: "";
		display: block;
		width: 100%;
		height: calc(100% + 0.375em);
		top: 0;
		left: 0;
		background-color: transparent;
		transition: height 0.25s ease;
	}
}
.reset{
  margin-bottom: 20px;
}
/* secondt row */

.summary{
  display: flex; 
  align-items: center;
}
.content-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.content-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
  font-weight: bold;
}

.content-table th,
.content-table td {
  padding: 12px 15px;
}

.content-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.content-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.content-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

.content-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}



</style>