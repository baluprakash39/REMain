 import {useState, useEffect} from 'react';                           
import { View, Button,  Text,  StyleSheet, ScrollView, Image} from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';


const SharePdf = ({route}) => {
  const { formData,
    customername,
    address,
    B,
    mobilenumber,
    emailid,
    enquiryDate,
    exShowroomPrice,
    roadtax,
    Vehiclecolor,
    EngineCC,
    adminallimage,
    vehiclename,
    model,
    companyaddress,
    companyname,
    city,
    contactnumber,
    gstin,
    country,
    dealeremailid,
    pincode,
    state,
    streetname,
    website,
    ins,
    instext,
    hype,
    hypetext,
    exwarrantytext,
    reimage,
    totalonroad,
    grandtotal,
    selectedOption,
    selectedMirrorstext, 
    selectedMirrorsvalue,
    selectedOilFillerCapText,
    selectedOilFillerCapValue,
    selectedHeadLightText,
    selectedHeadLightValue,
    selectedWindshieldsText,
    selectedWindshieldsValue,
    selectedPanniersText,
    selectedPanniersValue,
    selectedSeatsText,
    selectedSeatsValue,
    selectedBackrestText,
    selectedBackrestValue,
    selectedFootPegsText,
    selectedFootPegsValue,
    selectedEngineGuardsText,
    selectedEngineGuardsValue,
    selectedSumpGuardsText,
    selectedSumpGuardsValue,
    selectedSafetyAccessoriesText,
    selectedSafetyAccessoriesValue } = route.params;

  const Url='https://logos-world.net/wp-content/uploads/2022/12/Royal-Enfield-Logo.jpg'
  useEffect(() => {
    // Retrieve 'formData' from AsyncStorage
    AsyncStorage.getItem('formData')
      .then((data) => {
        if (data) {
          const parsedData = JSON.parse(data);
          // setFormData(parsedData);
          console.log('Retrieved formData from AsyncStorage:', parsedData);
        }
      })
      .catch((error) => {
        console.error('Error retrieving formData from AsyncStorage:', error);
      });
  }, []);

  const handleSharePDF = async () => {
    // Create an HTML template using the form data
    const htmlContent = `
    <html>
    <head>
  
    </head>
    <div class="bodypage" 
    style=" page-break-inside:avoid;
           display: flex;
           margin-bottom: 10px;
           flex-direction: column;
           justify-content: space-between;
           align-items: flex-start;">
  <div class="heading" 
      style="display: flex;
             width: 100%;
             height: 174px;
             padding-top: 4px;
             padding-bottom: 4px;
             padding-left: 10px ;
             padding-right: 10px;
             flex-direction: column;
             justify-content: space-between;
             align-items: center;
             flex-shrink: 0;
             gap: -2px;
             border-bottom: 0.5px solid var(--gray-100, #D7DAE0);
             background: #EBF2FF;">
   <div class="container1"
        style="display: flex;
               width: 100%;
               justify-content: space-between;
               align-items: center;">
     <div class="header"
          style="display: flex;
                 flex-direction: row;
                 align-items: flex-start;">
       <p class="headerText"
          style="color: var(--gray-900, #1A1C21);
                 font-family: Poppins,sans-serif;
                 font-size: 22px;
                 font-style: normal;
                 font-weight: 700;
                 text-transform: uppercase;">Quotation</p>
     </div>
     <div>
     <img src=${reimage}  class="relogo" 

            style="display: flex;
                   width: 170px;
                   height: 70px;
                   margin-right: 10px;
                   flex-direction: row;
                   justify-content: space-between;
                   align-items: flex-end;
                   flex-shrink: 0;
                   flex: 1 0 0;
                   align-self: stretch;"/>
     </div>
   </div>
   <div class="container2"
        style="display: flex;
               width: 100%;
               padding: 0px 12px;
               justify-content: space-between;
               align-items: center;">
     <div class="customerdetailscontainer"
          style="  display: flex;
                 flex-direction: column;
                 align-items: flex-start;">
       <p style="color: var(--gray-900, #1A1C21);
                 font-family: Poppins, sans-serif;
                 font-size: 10px;
                 font-style: normal;
                 font-weight: 800;
                 letter-spacing: 0.5px;
                 line-height: 0.1px;
                 text-decoration-line: underline;
                 align-items: flex-start;">Customer details</p>
       <p
          style="color: var(--gray-600, #5E6470);
                 font-family: Poppins, sans-serif;
                 font-size: 10px;
                 font-style: normal;
                 font-weight: 600;
                 line-height: 0.1px;
                 align-items: flex-start;
                 letter-spacing: 0.5px;">${customername}</p>
       <p       
          style="color: var(--gray-600, #5E6470);
                 font-family: Poppins, sans-serif;
                 font-size: 10px;
                 font-style: normal;
                 font-weight: 600;
                 line-height: 0.1px;
                 align-items: flex-start;">${mobilenumber}</p>
       <p       
          style="color: var(--gray-600, #5E6470);
                 font-family: Poppins, sans-serif;
                 font-size: 10px;
                 font-style: normal;
                 font-weight: 600;
                 line-height: 0.1px;
                 align-items: flex-	start;">${emailid}</p>
       <p       
          style="color: var(--gray-600, #5E6470);
                 font-family: Poppins, sans-serif;
                 font-size: 10px;
                 font-style: normal;
                 font-weight: 600;
                 line-height: 0.1px;
                 align-items: flex-start;">${address}</p>
       <p       
          style="color: var(--gray-600, #5E6470);
                 font-family: Poppins, sans-serif;
                 font-size: 10px;
                 font-style: normal;
                 font-weight: 600;
                 line-height: 0.1px;
                 align-items: flex-start;"></p>
     </div>
     <div class="companydetailscontainer"
          style="  display: flex;
                 flex-direction: column;
                 margin-right: 10px;
                 align-items: flex-end;">
       <p 
          style=" color: var(--indigo-500, #4C63ED);
                 font-family: Poppins, sans-serif;
                 font-size: 14px;
                 font-style: normal;
                 font-weight: 700;
                 line-height: 0.2px;">${companyname}</p>
       <p style="color: var(--gray-600, #5E6470);
                 font-family: Poppins, sans-serif;
                 font-size: 10px;
                 font-style: normal;
                 font-weight: 600;
                 line-height: 0.1px;
                 align-items: flex-start;">${companyaddress},${streetname}</p>
       <p style="color: var(--gray-600, #5E6470);
                 font-family: Poppins, sans-serif;
                 font-size: 10px;
                 font-style: normal;
                 font-weight: 600;
                 line-height: 0.1px;
                 align-items: flex-start;">${city},${state},${pincode},${country}</p>
       <p style="color: var(--gray-600, #5E6470);
                 font-family: Poppins, sans-serif;
                 font-size: 10px;
                 font-style: normal;
                 font-weight: 600;
                 line-height: 0.1px;
                 align-items: flex-start;">${gstin}</p>
       <p style="color: var(--gray-600, #5E6470);
                 font-family: Poppins, sans-serif;
                 font-size: 10px;
                 font-style: normal;
                 font-weight: 600;
                 line-height: 0.1px;
                 align-items: flex-start;">${contactnumber}</p>
     </div>
   </div>
  </div>
  <div class="enqvehimage"
      style="display: flex;
             width: 100%;
             padding-left: 16px;
             justify-content: space-between;
             align-items: flex-start;
             flex-direction: row;">
   <!-- Enquiry and Vehicle Details Container -->
   <div class="EnquiryandVehicle"
        style="display: flex;
               flex-direction: column;
               justify-content: space-between;
               align-self: stretch;">
     <!-- Container 3 (Enquiry Date and Number) -->
     <div class="container3"
          style="padding: 5px;
                 display: flex;
                 flex-direction: row;
                 justify-content: space-between;
                 align-items: center;
                 align-self: stretch;
                 border-bottom: 1px solid #d7dae0;">
       <div class="date"
            style="flexDirection: 'column';
                   alignItems: center;
                   margin: 2;
                   flex: 1;
                   border-right: 1px solid #d7dae0;">
         <p style="color: #5E6470;
                   font-family: 'Inter', sans-serif;
                   font-size: 10px;
                   font-weight: 600;">Enquiry Date</p>
         <p style="color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 12px;
                   font-weight: 700;">${enquiryDate}</p>
       </div>
       <!-- date closed -->
       <div class="eqnum"
            style="flexDirection: 'column';
                   alignItems: center;
                   margin-left: 10px;
                   flex: 1;
                   width: 80px;">
         <p style="color: #5E6470;
                   font-family: 'Inter', sans-serif;
                   font-size: 10px;
                   font-weight: 600;">Enquiry Number</p>
         <p style="color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 12px;
                   font-weight: 700;"></p>
       </div>
       <!-- eqnum closed -->
     </div>       
     <!-- container3 closed -->
             <!-- Container 4 (Vehicle Details) -->
     <div class="container4"
          style="display: flex;
                 justify-content: space-between;
                 flex-direction: row;
                 align-items: center;
                 align-self: stretch;">
       <div class="vehicledetails"
            style="display: flex;
                   align-items: center;
                   margin-right: 10px;
                   justify-content: center;">
         <p class="vehsubText"
            style="color: #1a1c21;
                   font-family: 'Inter', sans-serif;
                   font-size: 12px;
                   font-weight: 700;
                   line-height: 0.1px;">Vehicle details :</p>
       </div>
       <!-- vehicledetails closed -->
       <div class="vehiclename"
            style="display: flex;
                   align-items: center;
                   justify-content: center;
                   margin: 2px;">
         <p style="color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size:12px;
                   font-weight: 700;
                   line-height: 0.1px;">${vehiclename},${model},${EngineCC},${Vehiclecolor}</p>
       </div>
       <!-- vehiclename closed -->
     </div>
     <!-- container4 closed -->
      </div>
   <!-- EnquiryandVehicle closed -->
     <div class="vehicleimage">
       <img src=${adminallimage} alt="Example Image" class="bike" 
            style="object-fit: scale-down;
                  padding-right: 16px;
                   align-self: stretch;
                   border-radius: 10px;
                   margin-right:10px;
                   height: 100px;
                   flex-shrink: 0;"/>
     </div>
     <!-- vehicleimage closed -->
  </div>
  <!-- enqandvehimage closed-->
  <div class="quotationbody"
      style="display: flex;
             padding:0px 10px;
             justify-content: space-between;
             align-content: center;
             gap: 5px;
             flex-shrink: 0;
             flex-wrap: wrap;">
   <!-- On-road Price Details Container -->
   <div class="onroadpricecontainer" 
        style="display: flex;
               width: 100%;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               flex-shrink: 0;
               border-radius: 12px;
               border: 1px solid #D7DAE0;">
     <div class="quotationhead"
          style="display: flex;
                 height: 18px;
                 padding: 5px;
                 align-items: center;
                 flex-shrink: 0;
                 align-self: stretch;
                 border-bottom: 0.5px solid #d7dae0;
                 background-color: #EBF2FF;
                 border-top-left-radius: 12px;
                 border-top-right-radius: 12px;">
       <p class="quotationheadtext"
          style="color: #1a1c21;
                 font-family: 'Inter', sans-serif;
                 font-size: 10px;
                 font-weight: 700;">On - road price details</p>
     </div>
     <!-- quotationhead closed -->
     <!-- Ex-showroom Price -->
     <div class="container5"
          style="display: flex;
                 height: 16px;
                 flex-direction: row;
                 justify-content: space-between;
                 border-bottom: 0.5px solid #D7DAE0;
                 align-items: center;
                 align-self: stretch;
                 align-content: center;
                 flex-shrink: 0;">
       <div class="subheadings"
            style="display: flex;
                   padding: 0px 10px;
                   align-items: flex-start;
                   flex: 1 0 0;">
         <p class="onroadsubText"
            style="color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 10px;
                   font-weight: 600;">Ex-showroom Price</p>
       </div>
       <!-- subheadings closed -->
       <div class="symbol1"
            style="display: flex;
                   flex-direction: row;
                   align-items: center;
                   align-content: center;">
         <div class="rupeessymbol">
           <p class= "symbolText"
              style="color: #5E6470;
                     fontFamily: 'Inter', sans-serif;
                     font-size: 10px;
                     font-weight: 800;
                     align-content: center;
                     textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
         </div>
         <!-- rupeessymbol closed -->
         <div class="value"
              style="display: flex;
                     padding: 0px 10px;
                     justify-content: center;
                     align-items: center;">
           <p class="pricesubText"
              style="color: var(--gray-600, #5E6470);
                     text-align: right;
                     font-family: 'Inter', sans-serif;
                     font-size: 10px;
                     font-style: normal;
                     font-weight: 700;
                     line-height: 0.1px;">${exShowroomPrice}</p>
         </div>
         <!-- value closed -->
       </div>
       <!-- symbol 1 closed -->
     </div>
     <div class="container5"
          style="display: flex;
                 height: 16px;
                 flex-direction: row;
                 justify-content: space-between;
                 border-bottom: 0.5px solid #D7DAE0;
                 align-items: center;
                 align-self: stretch;
                 flex-shrink: 0;">
       <div class="subheadings"
            style="display: flex;
                   padding: 0px 10px;
                   align-items: flex-start;
                   flex: 1 0 0;">
         <p class="onroadsubText"
            style="color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 10px;
                   font-weight: 600;">Insurance/${instext}</p>
       </div>
       <!-- subheadings closed -->
       <div class="symbol1"
            style="display: flex;
                   flex-direction: row;
                   align-items: center;
                   margin-left: 3px;">
         <div class="rupeessymbol">
           <p class= "symbolText"
              style="color: #5E6470;
                     fontFamily: 'Inter', sans-serif;
                     font-size: 10px;
                     font-weight: 800;
                     align-content: center;
                     textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
         </div>
         <!-- rupeessymbol closed -->
         <div class="value"
              style="display: flex;
                     padding: 0px 10px;
                     justify-content: center;
                     align-items: center;">
           <p class="pricesubText"
              style="color: var(--gray-600, #5E6470);
                     text-align: right;
                     font-family: 'Inter', sans-serif;
                     font-size: 10px;
                     font-style: normal;
                     font-weight: 700;
                     line-height: 0.1px;">${ins}</p>
         </div>
         <!-- value closed -->
       </div>
       <!-- symbol 1 closed -->
     </div>
     <!-- container 5 closed -->
     <!-- Hypothication -->
     <div class="container5"
          style="display: flex;
                 height: 16px;
                 flex-direction: row;
                 justify-content: space-between;
                 border-bottom: 0.5px solid #D7DAE0;
                 align-items: center;
                 align-self: stretch;
                 flex-shrink: 0;">
       <div class="subheadings"
            style="display: flex;
                   padding: 0px 10px;
                   align-items: flex-start;
                   flex: 1 0 0;">
         <p class="onroadsubText"
            style="color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 10px;
                   font-weight: 600;">Hypothication/${hypetext}</p>
       </div>
       <!-- subheadings closed -->
       <div class="symbol1"
            style="display: flex;
                   flex-direction: row;
                   align-items: center;
                   margin-left: 3px;">
         <div class="rupeessymbol">
           <p class= "symbolText"
              style="color: #5E6470;
                     fontFamily: 'Inter', sans-serif;
                     font-size: 10px;
                     font-weight: 800;
                     align-content: center;
                     textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
         </div>
         <!-- rupeessymbol closed -->
         <div class="value"
              style="display: flex;
                     padding: 0px 10px;
                     justify-content: center;
                     align-items: center;">
           <p class="pricesubText"
              style="color: var(--gray-600, #5E6470);
                     text-align: right;
                     font-family: 'Inter', sans-serif;
                     font-size: 10px;
                     font-style: normal;
                     font-weight: 700;
                     line-height: 0.1px;">${hype}</p>
         </div>
         <!-- value closed -->
       </div>
       <!-- symbol 1 closed -->
     </div>
     <!-- RTO Charges -->
     <div class="container5"
          style="display: flex;
                 height: 16px;
                 flex-direction: row;
                 justify-content: space-between;
                 align-items: center;
                 align-self: stretch;
                 flex-shrink: 0;">
       <div class="subheadings"
            style="display: flex;
                   padding: 0px 10px;
                   align-items: flex-start;
                   flex: 1 0 0;">
         <p class="onroadsubText"
            style="color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 10px;
                   font-weight: 600;">RTO Charges</p>
       </div>
       <!-- subheadings closed -->
       <div class="symbol1"
            style="display: flex;
                   flex-direction: row;
                   align-items: center;
                   margin-left: 3px;">
         <div class="rupeessymbol">
           <p class= "symbolText"
              style="color: #5E6470;
                     fontFamily: 'Inter', sans-serif;
                     font-size: 10px;
                     font-weight: 800;
                     align-content: center;
                     textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
         </div>
         <!-- rupees symbol closed -->
         <div class="value"
              style="display: flex;
                     padding: 0px 10px;
                     justify-content: center;
                     align-items: center;">
           <p class="pricesubText"
              style="color: var(--gray-600, #5E6470);
                     text-align: right;
                     font-family: 'Inter', sans-serif;
                     font-size: 10px;
                     font-style: normal;
                     font-weight: 700;
                     line-height: 0.1px;">${roadtax}</p>
         </div>
         <!-- value closed -->
       </div>
       <!-- symbol 1 closed -->
     </div>
     <!-- container 5 closed -->
     <!-- On-road Price Total (A) -->
     <div class="container8"
          style="display: flex;
                 height: 30px;
                 flex-direction: row;
                 justify-content: space-between;
                 align-items: center;
                 align-self: stretch;
                 flex-shrink: 0;
                 border-bottom-left-radius: 12px;
                 border-bottom-right-radius: 12px;
                 border-top: 0.5px solid #D7DAE0;
                 background: #F9FAFC;">
       <div class="AandBpricetotal"
            style="display: flex;
                   align-items: center;
                   padding: 0px 10px;
                   flex: 1 0 0;">
         <p class="pricetotal"
            style="color: var(--indigo-600, #4358D1);
                   font-family: 'Inter', sans-serif;
                   font-size: 10px;
                   font-style: normal;
                   font-weight: 700;">On-road price total (A)</p>
       </div>
       <!-- A and B total price closed -->
       <div class="symbol8"
            style="display: flex;
                   padding: 0px 10px;
                   justify-content: flex-end;
                   align-items: center;
                   gap: 5px;
                   flex: 1 0 0;">
         <div class="rupeesword"
              style="display: flex;
                     align-items: center;">
           <p style="color: var(--indigo-600, #4358D1);
                     text-align: right;
                     font-family: 'Inter', sans-serif;
                     font-size: 12px;
                     font-style: normal;
                     font-weight: 600;
                     letter-spacing: 0.2px;">INR.</p>
         </div>
         <!-- rupees word closed -->
         <div class="rupeesvalue"
              style="display: flex;
                     align-items: flex-start;">
           <p style="color: var(--indigo-600, #4358D1);
                     text-align: right;
                     font-family: 'Inter', sans-serif;
                     font-size: 12px;
                     font-style: normal;
                     font-weight: 700;
                     letter-spacing: 0.2px;">${totalonroad}</p>
         </div>
         <!-- ruppesvalue closed -->
       </div>
       <!-- symbol 8 closed -->
     </div>
     <!-- container 8 closed -->
   </div>
   <!-- On road price container closed -->
   <!-- Optional Add-on's / Products Container -->
   <div class="optionaladdoncontainer" 
        style="display: flex;
               width: 100%;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               flex-shrink: 0;
               border-radius: 12px;
               border: 1px solid #D7DAE0;">
     <div class="quotationhead"
          style="display: flex;
                 height: 18px;
                 padding: 5px;
                 align-items: center;
                 flex-shrink: 0;
                 align-self: stretch;
                 border-bottom: 0.5px solid #d7dae0;
                 background-color: #EBF2FF;
                 border-top-left-radius: 12px;
                 border-top-right-radius: 12px;">
       <p class="quotationheadtext"
          style="color: #1a1c21;
                 font-family: 'Inter', sans-serif;
                 font-size: 10px;
                 font-weight: 700;">Optional Add-on's / Products</p>
     </div>
     <!-- quotationhead closed -->
     <div class="container5"
          style="display: flex;
                 height: 16px;
                 flex-direction: row;
                 justify-content: space-between;
                 border-bottom: 0.5px solid #D7DAE0;
                 align-items: center;
                 align-self: stretch;
                 align-content: center;
                 flex-shrink: 0;">
       <div class="subheadings"
            style="display: flex;
                   padding: 0px 10px;
                   align-items: flex-start;
                   flex: 1 0 0;">
         <p class="onroadsubText"
            style="color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 10px;
                   font-weight: 600">SafetyAccessories/${selectedSafetyAccessoriesText}p>
       </div>
       <!-- subheadings closed -->
       <div class="symbol1"
            style="display: flex;
                   flex-direction: row;
                   align-items: center;
                   align-content: center;">
         <div class="rupeessymbol">
           <p class= "symbolText"
              style="color: #5E6470;
                     fontFamily: 'Inter', sans-serif;
                     font-size: 10px;
                     font-weight: 800;
                     align-content: center;
                     textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
         </div>
         <!-- rupeessymbol closed -->
         <div class="value"
              style="display: flex;
                     padding: 0px 10px;
                     justify-content: center;
                     align-items: center;">
           <p class="pricesubText"
              style="color: var(--gray-600, #5E6470);
                     text-align: right;
                     font-family: 'Inter', sans-serif;
                     font-size: 10px;
                     font-style: normal;
                     font-weight: 700;
                     line-height: 0.1px;">${selectedSafetyAccessoriesValue}</p>
         </div>
         <!-- value closed -->
       </div>
       <!-- symbol 1 closed -->
     </div>
     <!-- container 5 closed -->
                      <!-- Mirrors -->
     <div class="container5"
          style="display: flex;
                 height: 16px;
                 flex-direction: row;
                 justify-content: space-between;
                 border-bottom: 0.5px solid #D7DAE0;
                 align-items: center;
                 align-self: stretch;
                 align-content: center;
                 flex-shrink: 0;">
       <div class="subheadings"
            style="display: flex;
                   padding: 0px 10px;
                   align-items: flex-start;
                   flex: 1 0 0;">
         <p class="onroadsubText"
            style="color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 10px;
                   font-weight: 600;">Mirrors/${selectedMirrorstext}</p>
                   
       </div>
       <!-- subheadings closed -->
       <div class="symbol1"
            style="display: flex;
                   flex-direction: row;
                   align-items: center;
                   align-content: center;">
         <div class="rupeessymbol">
           <p class= "symbolText"
              style="color: #5E6470;
                     fontFamily: 'Inter', sans-serif;
                     font-size: 10px;
                     font-weight: 800;
                     align-content: center;
                     textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
         </div>
         <!-- rupeessymbol closed -->
         <div class="value"
              style="display: flex;
                     padding: 0px 10px;
                     justify-content: center;
                     align-items: center;">
           <p class="pricesubText"
              style="color: var(--gray-600, #5E6470);
                     text-align: right;
                     font-family: 'Inter', sans-serif;
                     font-size: 10px;
                     font-style: normal;
                     font-weight: 700;
                     line-height: 0.1px;">${selectedMirrorsvalue}</p>
         </div>
         <!-- value closed -->
       </div>
       <!-- symbol 1 closed -->
     </div>
     <!-- container 5 closed -->

     <!-- Engine Guard -->
     <div class="container5"
          style="display: flex;
                 height: 16px;
                 flex-direction: row;
                 justify-content: space-between;
                 border-bottom: 0.5px solid #D7DAE0;
                 align-items: center;
                 align-self: stretch;
                 flex-shrink: 0;">
       <div class="subheadings"
            style="display: flex;
                   padding: 0px 10px;
                   align-items: flex-start;
                   flex: 1 0 0;">
         <p class="onroadsubText"
            style="color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 10px;
                   font-weight: 600;">OilFillerCap/${selectedOilFillerCapText}</p>
       </div>
       <!-- subheadings closed -->
       <div class="symbol1"
            style="display: flex;
                   flex-direction: row;
                   align-items: center;
                   margin-left: 3px;">
         <div class="rupeessymbol">
           <p class= "symbolText"
              style="color: #5E6470;
                     fontFamily: 'Inter', sans-serif;
                     font-size: 10px;
                     font-weight: 800;
                     align-content: center;
                     textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
         </div>
         <!-- rupeessymbol closed -->
         <div class="value"
              style="display: flex;
                     padding: 0px 10px;
                     justify-content: center;
                     align-items: center;">
           <p class="pricesubText"
              style="color: var(--gray-600, #5E6470);
                     text-align: right;
                     font-family: 'Inter', sans-serif;
                     font-size: 10px;
                     font-style: normal;
                     font-weight: 700;
                     line-height: 0.1px;">${selectedOilFillerCapValue}</p>
         </div>
         <!-- value closed -->
       </div>
       <!-- symbol 1 closed -->
     </div>
     <!-- container 5 closed -->

<!-- windsheilds-->
<div class="container5"
     style="display: flex;
            height: 16px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 0.5px solid #D7DAE0;
            align-items: center;
            align-self: stretch;
            flex-shrink: 0;">
  <div class="subheadings"
       style="display: flex;
              padding: 0px 10px;
              align-items: flex-start;
              flex: 1 0 0;">
    <p class="onroadsubText"
       style="color: #1A1C21;
              font-family: 'Inter', sans-serif;
              font-size: 10px;
              font-weight: 600;">HeadLight/${selectedHeadLightText}</p>
  </div>
  <!-- subheadings closed -->
  <div class="symbol1"
       style="display: flex;
              flex-direction: row;
              align-items: center;
              margin-left: 3px;">
    <div class="rupeessymbol">
      <p class= "symbolText"
         style="color: #5E6470;
                fontFamily: 'Inter', sans-serif;
                font-size: 10px;
                font-weight: 800;
                align-content: center;
                textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
    </div>
    <!-- rupeessymbol closed -->
    <div class="value"
         style="display: flex;
                padding: 0px 10px;
                justify-content: center;
                align-items: center;">
      <p class="pricesubText"
         style="color: var(--gray-600, #5E6470);
                text-align: right;
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                font-style: normal;
                font-weight: 700;
                line-height: 0.1px;">${selectedHeadLightValue}</p>
    </div>
    <!-- value closed -->
  </div>
  <!-- symbol 1 closed -->
</div>
<!-- container 5 closed -->

<div class="container5"
     style="display: flex;
            height: 16px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 0.5px solid #D7DAE0;
            align-items: center;
            align-self: stretch;
            flex-shrink: 0;">
  <div class="subheadings"
       style="display: flex;
              padding: 0px 10px;
              align-items: flex-start;
              flex: 1 0 0;">
    <p class="onroadsubText"
       style="color: #1A1C21;
              font-family: 'Inter', sans-serif;
              font-size: 10px;
              font-weight: 600;">Windshields/${selectedWindshieldsText}</p>
  </div>
  <!-- subheadings closed -->
  <div class="symbol1"
       style="display: flex;
              flex-direction: row;
              align-items: center;
              margin-left: 3px;">
    <div class="rupeessymbol">
      <p class= "symbolText"
         style="color: #5E6470;
                fontFamily: 'Inter', sans-serif;
                font-size: 10px;
                font-weight: 800;
                align-content: center;
                textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
    </div>
    <!-- rupeessymbol closed -->
    <div class="value"
         style="display: flex;
                padding: 0px 10px;
                justify-content: center;
                align-items: center;">
      <p class="pricesubText"
         style="color: var(--gray-600, #5E6470);
                text-align: right;
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                font-style: normal;
                font-weight: 700;
                line-height: 0.1px;">${selectedWindshieldsValue}</p>
    </div>
    <!-- value closed -->
  </div>
  <!-- symbol 1 closed -->
</div>
<!-- container 5 closed -->

<div class="container5"
     style="display: flex;
            height: 16px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 0.5px solid #D7DAE0;
            align-items: center;
            align-self: stretch;
            flex-shrink: 0;">
  <div class="subheadings"
       style="display: flex;
              padding: 0px 10px;
              align-items: flex-start;
              flex: 1 0 0;">
    <p class="onroadsubText"
       style="color: #1A1C21;
              font-family: 'Inter', sans-serif;
              font-size: 10px;
              font-weight: 600;">Panniers/${selectedPanniersText}</p>
  </div>
  <!-- subheadings closed -->
  <div class="symbol1"
       style="display: flex;
              flex-direction: row;
              align-items: center;
              margin-left: 3px;">
    <div class="rupeessymbol">
      <p class= "symbolText"
         style="color: #5E6470;
                fontFamily: 'Inter', sans-serif;
                font-size: 10px;
                font-weight: 800;
                align-content: center;
                textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
    </div>
    <!-- rupeessymbol closed -->
    <div class="value"
         style="display: flex;
                padding: 0px 10px;
                justify-content: center;
                align-items: center;">
      <p class="pricesubText"
         style="color: var(--gray-600, #5E6470);
                text-align: right;
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                font-style: normal;
                font-weight: 700;
                line-height: 0.1px;">${selectedPanniersValue}</p>
    </div>
    <!-- value closed -->
  </div>
  <!-- symbol 1 closed -->
</div>
<!-- container 5 closed -->

<div class="container5"
     style="display: flex;
            height: 16px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 0.5px solid #D7DAE0;
            align-items: center;
            align-self: stretch;
            flex-shrink: 0;">
  <div class="subheadings"
       style="display: flex;
              padding: 0px 10px;
              align-items: flex-start;
              flex: 1 0 0;">
    <p class="onroadsubText"
       style="color: #1A1C21;
              font-family: 'Inter', sans-serif;
              font-size: 10px;
              font-weight: 600;">Seats/${selectedSeatsText}</p>
  </div>
  <!-- subheadings closed -->
  <div class="symbol1"
       style="display: flex;
              flex-direction: row;
              align-items: center;
              margin-left: 3px;">
    <div class="rupeessymbol">
      <p class= "symbolText"
         style="color: #5E6470;
                fontFamily: 'Inter', sans-serif;
                font-size: 10px;
                font-weight: 800;
                align-content: center;
                textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
    </div>
    <!-- rupeessymbol closed -->
    <div class="value"
         style="display: flex;
                padding: 0px 10px;
                justify-content: center;
                align-items: center;">
      <p class="pricesubText"
         style="color: var(--gray-600, #5E6470);
                text-align: right;
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                font-style: normal;
                font-weight: 700;
                line-height: 0.1px;">${selectedSeatsValue}</p>
    </div>
    <!-- value closed -->
  </div>
  <!-- symbol 1 closed -->
</div>
<!-- container 5 closed -->

<div class="container5"
     style="display: flex;
            height: 16px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 0.5px solid #D7DAE0;
            align-items: center;
            align-self: stretch;
            flex-shrink: 0;">
  <div class="subheadings"
       style="display: flex;
              padding: 0px 10px;
              align-items: flex-start;
              flex: 1 0 0;">
    <p class="onroadsubText"
       style="color: #1A1C21;
              font-family: 'Inter', sans-serif;
              font-size: 10px;
              font-weight: 600;">Backrest/${selectedBackrestText}</p>
  </div>
  <!-- subheadings closed -->
  <div class="symbol1"
       style="display: flex;
              flex-direction: row;
              align-items: center;
              margin-left: 3px;">
    <div class="rupeessymbol">
      <p class= "symbolText"
         style="color: #5E6470;
                fontFamily: 'Inter', sans-serif;
                font-size: 10px;
                font-weight: 800;
                align-content: center;
                textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
    </div>
    <!-- rupeessymbol closed -->
    <div class="value"
         style="display: flex;
                padding: 0px 10px;
                justify-content: center;
                align-items: center;">
      <p class="pricesubText"
         style="color: var(--gray-600, #5E6470);
                text-align: right;
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                font-style: normal;
                font-weight: 700;
                line-height: 0.1px;">${selectedBackrestValue}</p>
    </div>
    <!-- value closed -->
  </div>
  <!-- symbol 1 closed -->
</div>
<!-- container 5 closed -->

<div class="container5"
     style="display: flex;
            height: 16px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 0.5px solid #D7DAE0;
            align-items: center;
            align-self: stretch;
            flex-shrink: 0;">
  <div class="subheadings"
       style="display: flex;
              padding: 0px 10px;
              align-items: flex-start;
              flex: 1 0 0;">
    <p class="onroadsubText"
       style="color: #1A1C21;
              font-family: 'Inter', sans-serif;
              font-size: 10px;
              font-weight: 600;">FootPegs/${selectedFootPegsText}</p>
  </div>
  <!-- subheadings closed -->
  <div class="symbol1"
       style="display: flex;
              flex-direction: row;
              align-items: center;
              margin-left: 3px;">
    <div class="rupeessymbol">
      <p class= "symbolText"
         style="color: #5E6470;
                fontFamily: 'Inter', sans-serif;
                font-size: 10px;
                font-weight: 800;
                align-content: center;
                textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
    </div>
    <!-- rupeessymbol closed -->
    <div class="value"
         style="display: flex;
                padding: 0px 10px;
                justify-content: center;
                align-items: center;">
      <p class="pricesubText"
         style="color: var(--gray-600, #5E6470);
                text-align: right;
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                font-style: normal;
                font-weight: 700;
                line-height: 0.1px;">${selectedFootPegsValue}</p>
    </div>
    <!-- value closed -->
  </div>
  <!-- symbol 1 closed -->
</div>
<!-- container 5 closed -->

<div class="container5"
     style="display: flex;
            height: 16px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 0.5px solid #D7DAE0;
            align-items: center;
            align-self: stretch;
            flex-shrink: 0;">
  <div class="subheadings"
       style="display: flex;
              padding: 0px 10px;
              align-items: flex-start;
              flex: 1 0 0;">
    <p class="onroadsubText"
       style="color: #1A1C21;
              font-family: 'Inter', sans-serif;
              font-size: 10px;
              font-weight: 600;">EngineGuards/${selectedEngineGuardsText}</p>
  </div>
  <!-- subheadings closed -->
  <div class="symbol1"
       style="display: flex;
              flex-direction: row;
              align-items: center;
              margin-left: 3px;">
    <div class="rupeessymbol">
      <p class= "symbolText"
         style="color: #5E6470;
                fontFamily: 'Inter', sans-serif;
                font-size: 10px;
                font-weight: 800;
                align-content: center;
                textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
    </div>
    <!-- rupeessymbol closed -->
    <div class="value"
         style="display: flex;
                padding: 0px 10px;
                justify-content: center;
                align-items: center;">
      <p class="pricesubText"
         style="color: var(--gray-600, #5E6470);
                text-align: right;
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                font-style: normal;
                font-weight: 700;
                line-height: 0.1px;">${selectedEngineGuardsValue}</p>
    </div>
    <!-- value closed -->
  </div>
  <!-- symbol 1 closed -->
</div>
<!-- container 5 closed -->

<div class="container5"
     style="display: flex;
            height: 16px;
            flex-direction: row;
            justify-content: space-between;
            border-bottom: 0.5px solid #D7DAE0;
            align-items: center;
            align-self: stretch;
            flex-shrink: 0;">
  <div class="subheadings"
       style="display: flex;
              padding: 0px 10px;
              align-items: flex-start;
              flex: 1 0 0;">
    <p class="onroadsubText"
       style="color: #1A1C21;
              font-family: 'Inter', sans-serif;
              font-size: 10px;
              font-weight: 600;">SumpGuards/${selectedSumpGuardsText}</p>
  </div>
  <!-- subheadings closed -->
  <div class="symbol1"
       style="display: flex;
              flex-direction: row;
              align-items: center;
              margin-left: 3px;">
    <div class="rupeessymbol">
      <p class= "symbolText"
         style="color: #5E6470;
                fontFamily: 'Inter', sans-serif;
                font-size: 10px;
                font-weight: 800;
                align-content: center;
                textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
    </div>
    <!-- rupeessymbol closed -->
    <div class="value"
         style="display: flex;
                padding: 0px 10px;
                justify-content: center;
                align-items: center;">
      <p class="pricesubText"
         style="color: var(--gray-600, #5E6470);
                text-align: right;
                font-family: 'Inter', sans-serif;
                font-size: 10px;
                font-style: normal;
                font-weight: 700;
                line-height: 0.1px;">${selectedSumpGuardsValue}</p>
    </div>
    <!-- value closed -->
  </div>
  <!-- symbol 1 closed -->
</div>
<!-- container 5 closed -->

     <!-- 4 years extended warranty -->
     <div class="container5"
          style="display: flex;
                 height: 16px;
                 flex-direction: row;
                 justify-content: space-between;
                 align-items: center;
                 align-self: stretch;
                 flex-shrink: 0;">
       <div class="subheadings"
            style="display: flex;
                   padding: 0px 10px;
                   align-items: flex-start;
                   flex: 1 0 0;">
         <p class="onroadsubText"
            style="color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 10px;
                   font-weight: 600;">Extended Warranty/${exwarrantytext}</p>
       </div>
       <!-- subheadings closed -->
       <div class="symbol1"
            style="display: flex;
                   flex-direction: row;
                   align-items: center;
                   margin-left: 3px;">
         <div class="rupeessymbol">
           <p class= "symbolText"
              style="color: #5E6470;
                     fontFamily: 'Inter', sans-serif;
                     font-size: 10px;
                     font-weight: 800;
                     align-content: center;
                     textAlign: 'center';">&nbsp;&#8377;&nbsp;</p>
         </div>
         <!-- rupees symbol closed -->
         <div class="value"
              style="display: flex;
                     padding: 0px 10px;
                     justify-content: center;
                     align-items: center;">
           <p class="pricesubText"
              style="color: var(--gray-600, #5E6470);
                     text-align: right;
                     font-family: 'Inter', sans-serif;
                     font-size: 10px;
                     font-style: normal;
                     font-weight: 700;
                     line-height: 0.1px;">${selectedOption}</p>
         </div>
         <!-- value closed -->
       </div>
       <!-- symbol 1 closed -->
     </div>
     <!-- container 5 closed -->
     <!-- Optional Add-on's price total (B) -->
     <div class="container8"
          style="display: flex;
                 height: 30px;
                 flex-direction: row;
                 justify-content: space-between;
                 align-items: center;
                 align-self: stretch;
                 flex-shrink: 0;
                 border-bottom-left-radius: 12px;
                 border-bottom-right-radius: 12px;
                 border-top: 0.5px solid #D7DAE0;
                 background: #F9FAFC;">
       <div class="AandBpricetotal"
            style="display: flex;
                   align-items: center;
                   padding: 0px 10px;
                   flex: 1 0 0;">
         <p class="pricetotal"
            style="color: var(--indigo-600, #4358D1);
                   font-family: 'Inter', sans-serif;
                   font-size: 10px;
                   font-style: normal;
                   font-weight: 700;">Optional Add-on's price total (B)</p>
       </div>
       <!-- A and B total price closed -->
       <div class="symbol8"
            style="display: flex;
                   padding: 0px 10px;
                   justify-content: flex-end;
                   align-items: center;
                   gap: 5px;
                   flex: 1 0 0;">
         <div class="rupeesword"
              style="display: flex;
                     align-items: center;">
           <p style="color: var(--indigo-600, #4358D1);
                     text-align: right;
                     font-family: 'Inter', sans-serif;
                     font-size: 12px;
                     font-style: normal;
                     font-weight: 600;
                     letter-spacing: 0.2px;">INR.</p>
         </div>
         <!-- rupees word closed -->
         <div class="rupeesvalue"
              style="display: flex;
                     align-items: flex-start;">
           <p style="color: var(--indigo-600, #4358D1);
                     text-align: right;
                     font-family: 'Inter', sans-serif;
                     font-size: 12px;
                     font-style: normal;
                     font-weight: 700;
                     letter-spacing: 0.2px;">${B}</p>
         </div>
         <!-- ruppesvalue closed -->
       </div>
       <!-- symbol 8 closed -->
     </div>
     <!-- container 8 closed -->
   </div>
   <!-- optionaladdoncontainer -->
   <!-- Terms & Conditions Container -->
   <div class="termsandgrandcontainer"
        style="display:flex;
              width: 400%;
               margin-top: 2px;
               flex-direction: row;
               justify-content: space-between;
               align-content: center;">
     <div class="termscontainer"
          style="display: flex;
                 flex-direction: column;
                 justify-content: center;
                 align-items: flex-start;">
       <div class="termsandconditions"
            style="display: flex;
                   justify-content: flex-end;
                   align-items: flex-start;">
         <p class="termsText"
            style="width: 244px;
                   color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 10px;
                   font-style: normal;
                   font-weight: 500;
                   line-height: 0.2px;
                   text-decoration-line: underline;">Terms & Conditions :</p>
       </div>
       <!-- termsand conditions closed -->
       <!-- Terms Details -->
       <div class="point1terms"
            style="display: flex;
                   align-items: flex-start;">
         <p class="termssubText"
            style="width: 244px;
                   color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 8px;
                   font-style: normal;
                   font-weight: 500;
                   line-height: 1px;
                   margin-bottom: 2px;">1). Prices may change, final prices at invoicing apply.</p>
       </div>
       <!-- point1terms closed -->
       <div class="point2terms"
            style="display: flex;
                   align-items: flex-start;">
         <p class="termssubText"
            style="width: 244px;
                   color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 8px;
                   font-style: normal;
                   font-weight: 500;
                   margin-bottom: 2px;">2). Payment via Cheque/Demand Draft in favor of LEKHANA AUMOTIVES only.</p>
       </div>
       <!-- point2terms closed -->
       <div class="point3terms"
            style="display: flex;
                   align-items: flex-start;">
         <p class="termssubText"
            style="width: 244px;
                   color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 8px;
                   font-style: normal;
                   font-weight: 500;
                   margin-bottom: 2px;">3). Local taxes apply, receipts provided upon billing/delivery.</p>
       </div>
       <!-- point3terms closed -->
       <div class="point4terms"
            style="display: flex;
                   align-items: flex-start;">
         <p class="termssubText"
            style="width: 244px;
                   color: #1A1C21;
                   font-family: 'Inter', sans-serif;
                   font-size: 8px;
                   font-style: normal;
                   font-weight: 500;
                   margin-bottom: 2px;">4). Invoicing, registration, and delivery upon full payment receipt and realization.</p>
       </div>
       <!-- point4terms closed -->
     </div>
     <!-- termscontainer closed -->
  
     <!-- Total Price Details -->
     <div class="totalpricebody"
          style="display: flex;
                 flex-direction: column;
                 justify-content: center;
                 align-items: flex-start;
                 border-radius: 12px;
                 border: 1px solid #D7DAE0;
                 background: #F9FAFC;">
       <!-- On-road Price Total (A) -->
       <div class="onroadtotalpricecontainer"
            style="display: flex;
                   justify-content: space-between;
                   align-items: center;
                   flex-shrink: 0;
                   align-self: stretch;
                   border-bottom: 0.5px solid #D7DAE0;">
         <div class="total"
              style="display: flex;
                     padding: 0px 10px;
                     align-items: center;">
           <p class="pricetotalText"
              style="color: var(--indigo-600, #4358D1);
                     font-family: 'Inter', sans-serif;
                     font-size: 10px;
                     font-style: normal;
                     font-weight: 700;
                     line-height: 0.1px;">On-road price total (A)</p>
         </div>
         <!-- total closed -->
         <div class="symbol8"
              style="display: flex;
                     padding: 0px 10px;
                     justify-content: flex-end;
                     align-items: center;
                     gap: 5px;
                     flex: 1 0 0;">
           <div class="rupeesword"
                style="display: flex;
                       align-items: center;">
             <p style="color: var(--indigo-600, #4358D1);
                       text-align: right;
                       font-family: 'Inter', sans-serif;
                       font-size: 12px;
                       font-style: normal;
                       font-weight: 600;
                       letter-spacing: 0.2px;">INR.</p>
           </div>
           <!-- rupees word closed -->
           <div class="rupeesvalue"
                style="display: flex;
                       align-items: flex-start;">
             <p style="color: var(--indigo-600, #4358D1);
                       text-align: right;
                       font-family: 'Inter', sans-serif;
                       font-size: 12px;
                       font-style: normal;
                       font-weight: 700;
                       letter-spacing: 0.2px;">${totalonroad}</p>
           </div>
           <!-- ruppesvalue closed -->
         </div>
         <!-- symbol 8 closed -->
       </div>
       <!-- onroadtotalpricecontainer closed -->
       <!-- Optional Add-on's Price Total (B) -->
       <div class="optionaladdontotalpricecontainer"
            style="display: flex;
                   flex-direction: row;
                   justify-content: space-between;">
         <div class="total"
              style="display: flex;
                     padding: 0px 10px;
                     align-items: center;">
           <p class="pricetotalText"
              style="color: var(--indigo-600, #4358D1);
                     font-family: 'Inter', sans-serif;
                     font-size: 10px;
                     font-style: normal;
                     font-weight: 700;">Optional Add-on's price total (B)</p>
         </div>
         <!-- total closed -->
         <div class="symbol8"
              style="display: flex;
                     padding: 0px 10px;
                     justify-content: flex-end;
                     align-items: center;
                     gap: 5px;
                     flex: 1 0 0;">
           <div class="rupeesword"
                style="display: flex;
                       align-items: center;">
             <p style="color: var(--indigo-600, #4358D1);
                       text-align: right;
                       font-family: 'Inter', sans-serif;
                       font-size: 12px;
                       font-style: normal;
                       font-weight: 600;
                       letter-spacing: 0.2px;">INR.</p>
           </div>
           <!-- rupees word closed -->
           <div class="rupeesvalue"
                style="display: flex;
                       align-items: flex-start;">
             <p style="color: var(--indigo-600, #4358D1);
                       text-align: right;
                       font-family: 'Inter', sans-serif;
                       font-size: 12px;
                       font-style: normal;
                       font-weight: 700;
                       letter-spacing: 0.2px;">${B}</p>
           </div>
           <!-- ruppesvalue closed -->
         </div>
         <!-- symbol 8 closed -->
       </div>
       <!-- optionaladdontotalpricecontainer closed -->
       <!-- Grand Total (A+B) -->
       <div class="grandtotalcontainer"
            style="display: flex;
                   justify-content: space-between;
                   align-items: center;
                   flex: 1 0 0;
                   align-self: stretch;
                   border-radius: 0px 0px 12px 12px;
                   border-top: 0.5px solid #D7DAE0;">
         <div class="grandtotalheader"
              style="display: flex;
                     padding: 0px 10px;
                     align-items: center;
                     gap: 10px;">
           <p class="grandtotalText"
              style="color: var(--indigo-600, #4358D1);
                     font-family: 'Inter', sans-serif;
                     font-size: 14px;
                     font-style: normal;
                     font-weight: 700;">Grand Total (A+B)</p>
         </div>
         <!-- grandtoalheader closed -->
         <div class="grandtotalvalue"
              style="display: flex;
                     padding: 0px 10px;
                     justify-content: flex-end;
                     align-items: center;
                     gap: 5px;
                     flex: 1 0 0;">
           <div class="grandrupeesword"
                style="display: flex;
                       align-items: flex-start;">
             <p style="color: var(--indigo-600, #4358D1);
                       text-align: right;
                       font-family: 'Inter', sans-serif;
                       font-size: 14px;
                       font-style: normal;
                       font-weight: 700;
                       letter-spacing: 0.28px;">INR.</p>
           </div>
           <!-- grandrupeesword closed -->
           <div class="rupeesvalue"
                style="display: flex;
                       align-items: flex-start;">
             <p style="color: var(--indigo-600, #4358D1);
                       text-align: right;
                       font-family: 'Inter', sans-serif;
                       font-size: 14px;
                       font-style: normal;
                       font-weight: 700;
                       line-height: 14px; /* 100% */
                       letter-spacing: 0.28px;">${grandtotal}</p>
           </div>
           <!-- rupeesvalue closed -->
         </div>
         <!-- grandtotalvalue closed -->
       </div>
       <!-- grandtotalcontainer closed -->
     </div>
     <!-- totalpricebody closed -->
   </div>
   <!-- termsandgrandcontainer closed -->
  </div>
  <!-- quotationbody closed -->
           <!-- Employeename and Company authorization -->
  <div class="namecompany"
      style="display: flex;
            width: 100%;
             padding:0px 16px;
             justify-content: space-between;
             align-items: center;">
               <!-- Name Details -->
   <div class="name"
        style="display: flex;
               justify-content: center;
               align-items: flex-end;">
     <div class="employeenamecontainer"
          style="display: flex;
                 padding: 10px;
                 justify-content: center;
                 align-items: center;">
       <p class="nameText"
          style="color: #000;
                 font-family: 'Inter', sans-serif;
                 font-size: 10px;
                 font-style: normal;
                 font-weight: 500;">Name :</p>
     </div>
     <!-- employeenamecontainer closed -->
     <div class="employeenamedash"
          style="display: flex;">
       <p class="dash"
          style="width: 150px;
                 height: 1px;
                 background: #000;"></p>
     </div>
     <!-- employeenamedash closed -->
   </div>
   <!-- name closed -->
               <!-- Company Details -->
   <div class="company"
        style="display: flex;
               align-items: flex-start;">
     <div class="For"
          style="display: flex;
                 padding: 0px 10px;
                 justify-content: center;
                 align-items: center;">
       <p class="ForText"
          style="color: #1A1C21;
                 text-align: center;
                 font-family: 'Inter', sans-serif;
                 font-size: 10px;
                 font-style: normal;
                 font-weight: 500;">For :</p>
     </div>
     <!-- for closed -->
     <div class="companyname"
          style="display: flex;
                 justify-content: center;
                 align-items: center;">
       <p class="companyText"
          style="color: #1A1C21;
                 text-align: right;
                 font-family: 'Inter', sans-serif;
                 font-size: 10px;
                 font-style: normal;
                 font-weight: 500;">LEKHANA AUTOMOTIVES</p>
     </div>
     <!-- companyname closed -->
   </div>
   <!-- company closed -->
  </div>
  <!-- namecompany closed -->
             <!-- Employeecontact and GSTIN -->
  <div class="contactgst"
      style="display: flex;
              width: 100%;
             padding:0px 16px;
             justify-content: space-between;
             align-items: center;">
   <!-- Contact Details -->
   <div class="contact"
        style="display: flex;
               align-items: flex-end;">
     <div class="employeenamecontainer"
          style="display: flex;
                 justify-content: center;
                 padding: 10px;
                 align-items: center;">
       <p class="nameText"
          style="color: #000;
                 font-family: 'Inter', sans-serif;
                 font-size: 10px;
                 font-style: normal;
                 font-weight: 500;">Contact :</p>
     </div>
     <!-- employeenamecontainer closed -->
     <div class="employeenamedash"
          style="display: flex;
                 justify-content: flex-end;
                 padding-top: 0px;
                 padding-bottom: 0px;">
       <p class="dash"
          style="width: 150px;
                 height: 0.5px;
                 background: #000;"></p>
     </div>
     <!-- employeenamedash closed -->
   </div>
   <!-- contact closed -->
             <!-- GSTIN and Number Details -->
   <div class="Gstindashandnumber"
        style="display: flex;
               flex-direction: column;
               align-items: flex-end;">
     <p class="dash"
        style="width: 200px;
                 height: 1px;
                 background: #000;"></p>
     <div class="GSTINandNumbercontainer"
          style="display: flex;
                 align-items: flex-start;">
       <div class="gstinTextcontainer"
            style="display: flex;
                   padding: 0px 5px;
                   justify-content: center;
                   align-items: center;">
         <p class="gstinText"
            style="color: #1A1C21;
                   text-align: center;
                   font-family: 'Inter',sans-serif;
                   font-size: 10px;
                   font-style: normal;
                   font-weight: 600;">GSTIN :</p>
       </div>
       <!-- gstinTextcontainer closed -->
       <div class="gstinnumbercontainer"
            style="display: flex;
                   justify-content: center;
                   align-items: center;">
         <p class="gstinText"
            style="color: #1A1C21;
                   text-align: right;
                   font-family: 'Inter',sans-serif;
                   font-size: 10px;
                   font-style: normal;
                   font-weight: 600;">${gstin}</p>
       </div>
       <!-- gstinnumbercontainer closed -->
     </div>
     <!-- GSTINandNumbercontainer closed -->
   </div>
   <!-- Gstindashandnumber closed -->
  </div>
  <!-- contactgst closed -->
  
                 <!-- Footer -->
  <div class="footer"
      style="display: flex;
              width: 100%;
             height: 30px;
             padding-left: 16px;
             padding-right: 16px;
             justify-content: space-between;
             align-items: center;
             flex-shrink: 0;
             border-top: 0.5px solid #D7DAE0;
             background: #EBF2FF;">
   <!-- Website Link -->
   <div class="website"
        style="display: flex;
               width: 107px;
               justify-content: space-between;
               align-items: center;
               flex-shrink: 0;">
     <p class="websiteText"
        style="color: var(--gray-600, #5E6470);
               font-family: 'Inter', sans-serif;
               font-size: 10px;
               font-style: normal;
               font-weight: 600;">${website}</p>
   </div>
   <!-- website closed -->
   <!-- Company Email -->
   <div class="companyemail"
        style="display: flex;
               width: 156px;
               padding-right: 8px;
               justify-content: space-between;
               align-items: center;
               flex-shrink: 0;">
     <p class="companyemailText"
        style="color: var(--gray-600, #5E6470);
               text-align: right;
               font-family: 'Inter', sans-serif;
               font-size: 10px;
               font-style: normal;
               font-weight: 600;
               letter-spacing: 0.4px">${dealeremailid}</p>
   </div>
   <!-- companyemail closed -->
  </div>
  <!-- Footer closed -->
  </div>
  <!-- bodypage closed -->           
  </body>
  </html>
  `;

    const options = {
      html: htmlContent,
      fileName: 'Royal Enfield PDF',
      directory: 'Documents',
    };

    try {
      const pdf = await RNHTMLtoPDF.convert(options);

      // Share the PDF
      const shareOptions = {
        url: `file://${pdf.filePath}`,
        type: 'application/pdf',
        message: 'PDF shared successfully',
      };

      const result = await Share.open(shareOptions);
      if (result.app === Share.SheetClosed) {
        // The share sheet was closed
      } else if (result.app === Share.SheetCancelled) {
        // Sharing was cancelled
      } else {
        // Sharing was successful
      }
    } catch (error) {
      console.error('Error sharing PDF:', error);
    }
  };
 return(
  
     <ScrollView horizontal={true}>
          <View style={{flexDirection:'row'}}>
      <ScrollView contentContainerStyle={styles.page}>
        
      <View style={styles.bodypage}> 
    <View style={styles.heading}>     
    <View style={styles.container1}>  
    <View style={styles.header}> 
      <Text style={styles.headerText}>Quotation</Text>
    </View> 
    <Image source={{ uri: Url }} style={styles.relogo} />
  </View> 
  <View style={styles.container2}>  
    <View style={styles.customerdetailscontainer}>  
      <Text style={styles.header2Text}>Customer details</Text>
      <Text style={ styles.headersubtext}>{customername}</Text>
      <Text style={ styles.headersubtext}>{address}</Text>
      <Text style={ styles.headersubtext}>{mobilenumber}</Text>
      <Text style={ styles.headersubtext}>{emailid}</Text>  
      
    </View> 
  <View style={styles.companydetailscontainer}>                        
    <Text style={styles.showroomnameText}>{companyname}</Text>
    <Text style={styles.headersubtext}>{address}</Text>
    <Text style={styles.headersubtext}>{`${city}, ${state}, ${pincode}, ${country}`}</Text>
    <Text style={styles.headersubtext}>{gstin}</Text>
    <Text style={styles.headersubtext}>{contactnumber}</Text>
  </View> 
  </View> 
  </View>  
<View style={styles.enqvehimage}>
<View style={styles.EnquiryandVehicle}>
  <View style={styles.container3}>  
    <View style={styles.date}>   
    <Text style={styles.subText}>Enquiry date</Text>
    <Text  style={styles.dateText}>{enquiryDate}</Text>
    </View>
    <View style={styles.eqnum}>    
      <Text style={styles.subText}>Enquiry Number</Text>
      <Text style={styles.dateText}></Text>
    </View> 
  </View>   
  <View style={styles.container4}>        
    <View style={styles.vehicledetails}>     
    <Text style={styles.vehsubText}>Vehicle details :</Text>
    </View> 
    <View style={styles.vehiclename}>  
    <Text style={styles.vehnamesubText}>{`${vehiclename}, ${model}, ${EngineCC}, ${Vehiclecolor}`}</Text>
    </View> 
  </View> 
</View>
<Image source={{ uri: adminallimage }} style={styles.bike} />
</View>
  <View style={styles.quotationbody}>   
  <View style={styles.onroadpricecontainer}>    
  <View style={styles.quotationhead}>       
    <Text style={styles.quotationheadtext}>On - road price details</Text>
  </View>  
  <View style={styles.container5}>    
    <View style={styles.subheadings}>   
    <Text style={styles.onroadsubText}>Ex-showroom Price</Text>
    </View> 
    <View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{exShowroomPrice}</Text>
     </View>
     </View> 
     </View> 
   {/* <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.onroadsubText}>Insurance</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}></Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}></Text>
     </View>
     </View> 
     </View> */}
     <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.onroadsubText}>Insurance/{instext}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{ins}</Text>
     </View>
     </View> 
     </View>
     {/* <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.onroadsubText}>Hypothication</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}></Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}></Text>
     </View>
     </View> 
     </View> */}
     <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.onroadsubText}>Hypothication/{hypetext}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{hype}</Text>
     </View>
     </View> 
     </View>
    <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.onroadsubText}>RTO Charges</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{roadtax}</Text>
     </View>
     </View> 
     </View>
   <View style={styles.container8}>
   <View style={styles.AandBpricetotal}>
    <Text style={styles.pricetotal}>On-road price total (A)</Text>
    </View>
   <View style={styles.symbol8}>
    <View style={styles.rupeesword}>
     <Text style={styles.rupeesinr}>INR.</Text>
    </View>
    <View style={styles.rupeesvalue}>
     <Text style={styles.AandBtotal}>{totalonroad}</Text>
    </View>
   </View>
   </View>
   </View>
   <View style={styles.optionaladdoncontainer}>
   <View style={styles.quotationhead}>
    <Text style={styles.quotationheadtext}>Optional Add-on's / Products</Text>
  </View>
  <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.addonproducttext}>SafetyAccessories/{selectedSafetyAccessoriesText}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{selectedSafetyAccessoriesValue}</Text>
     </View>
     </View> 
     </View>
     <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.addonproducttext}>Mirrors/{selectedMirrorstext}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{selectedMirrorsvalue}</Text>
     </View>
     </View> 
     </View>
     <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.addonproducttext}>OilFillerCap/{selectedOilFillerCapText}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{selectedOilFillerCapValue}</Text>
     </View>
     </View> 
     </View>
     {/* <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.addonproducttext}>{selectedOilFillerCapText}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{selectedOilFillerCapValue}</Text>
     </View>
     </View> 
     </View> */}
     <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.addonproducttext}>HeadLight/{selectedHeadLightText}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{selectedHeadLightValue}</Text>
     </View>
     </View> 
     </View>
     <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.addonproducttext}>Windshields/{selectedWindshieldsText}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{selectedWindshieldsValue}</Text>
     </View>
     </View> 
     </View>
     <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.addonproducttext}>Panniers/{selectedPanniersText}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{selectedPanniersValue}</Text>
     </View>
     </View> 
     </View>
     <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.addonproducttext}>Seats/{selectedSeatsText}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{selectedSeatsValue}</Text>
     </View>
     </View> 
     </View>
     <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.addonproducttext}>Backrest/{selectedBackrestText}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{selectedBackrestValue}</Text>
     </View>
     </View> 
     </View>
     <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.addonproducttext}>FootPegs/{selectedFootPegsText}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{selectedFootPegsValue}</Text>
     </View>
     </View> 
     </View>
     <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.addonproducttext}>EngineGuards/{selectedEngineGuardsText}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{selectedEngineGuardsValue}</Text>
     </View>
     </View> 
     </View>
     <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.addonproducttext}>SumpGuards/{selectedSumpGuardsText}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{selectedSumpGuardsValue}</Text>
     </View>
     </View> 
     </View>
    {/* <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.addonproducttext}>Extended warranty</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}></Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}></Text>
     </View>
     </View> 
     </View> */}
     <View style={styles.container5}>
    <View style={styles.subheadings}>
    <Text style={styles.addonproducttext}>Extended warranty/{exwarrantytext}</Text>
    </View>
<View style={styles.symbol1}>         
<View style={styles.rupeessymbol}>
     <Text style={styles.symbolText}>₹</Text>
     </View>
     <View style={styles.value}>
     <Text style={styles.pricesubText}>{selectedOption}</Text>
     </View>
     </View> 
     </View>
     <View style={styles.container8}>
     <View style={styles.AandBpricetotal}>
    <Text style={styles.pricetotal}>Optional Add-on's price total (B)</Text>
  </View>                                                                                 
  <View style={styles.symbol8}>                         
<View style={styles.rupeesword}>
     <Text style={styles.rupeesinr}>INR.</Text>
    </View>
    <View style={styles.rupeesvalue}>
     <Text style={styles.AandBtotal}>{grandtotal}</Text>
    </View>
   </View>
   </View>
   </View> 
<View style={styles.termsandgrandcontainer}>
   <View style={styles.termscontainer}>
    <View style={styles.termsandconditions}>
     <Text style={styles.termsText}>Terms & Conditions :</Text>
    </View>
    <View style={styles.point1terms}>
      <Text style={styles.termssubText}>1). Prices may change, final prices at invoicing apply.</Text>
    </View>
    <View style={styles.point2terms}>
      <Text style={styles.termssubText}>2). Payment via Cheque/Demand Draft in favor of LEKHANA AUMOTIVES only.</Text>
    </View>
    <View style={styles.point3terms}>
      <Text style={styles.termssubText}>3). Local taxes apply, receipts provided upon billing/delivery.</Text>
    </View>
    <View style={styles.point4terms}>
      <Text style={styles.termssubText}>4). Invoicing, registration, and delivery upon full payment receipt and realization.</Text>
    </View>
   </View>
   <View style={styles.totalpricebody}>
   <View style={styles.onroadtotalpricecontainer}>
   <View style={styles.total}>
    <Text style={styles.pricetotalText}>On-road price total (A)</Text>
   </View>
    <View style={styles.onroadvalue}>
  <View style={styles.rupeesword}>
     <Text style={styles.rupeesinr}>INR.</Text>
     </View>
     <View style={styles.rupeesvalue}>
     <Text style={styles.AandBtotal}>{totalonroad}</Text>
     </View>
   </View>
   </View>
   <View style={styles.optionaladdontotalpricecontainer}>
   <View style={styles.total}>
    <Text style={styles.pricetotalText}>Optional Add-on's price total (B)</Text>
   </View>
   <View style={styles.onroadvalue}>
  <View style={styles.rupeesword}>
     <Text style={styles.rupeesinr}>INR.</Text>
     </View>
     <View style={styles.rupeesvalue}>
     <Text style={styles.AandBtotal}>{B}</Text>
     </View>
   </View>
   </View>
   <View style={styles.grandtotalcontainer}>
   <View style={styles.grandtotalheader}>
    <Text style={styles.grandtotalText}>Grand Total (A+B)</Text>                       
   </View>
   <View style={styles.grandtotalvalue}>
    <View style={styles.grandrupeesword}>
     <Text style={styles.symbolText9}>INR.</Text>
     </View>
     <View style={styles.grandrupeesvalue}>
     <Text style={styles.grandtotalvalueText}>{grandtotal}</Text>
    </View>
   </View>
</View>
</View>
</View>
   </View>
   <View style={styles.namecompany}>
   <View style={styles.name}>
  <View style={styles.employeenamecontainer}>
    <Text style={styles.nameText}>Name :</Text>
    </View>
    <View style={styles.employeenamedash}>
    <Text style={styles.dash}></Text>
    </View>
   </View>
   <View style={styles.company}>
  <View style={styles.For}>
    <Text style={styles.ForText}>For :</Text>
    </View>
    <View style={styles.companyname}>
    <Text style={styles.companyText}>LEKHANA AUTOMOTIVES</Text>
    </View>
   </View>
   </View> 
   <View style={styles.contactgst}>
   <View style={styles.contact}>
     <View style={styles.employeenamecontainer}>
    <Text style={styles.nameText}>Contact :</Text>
    </View>
    <View style={styles.employeenamedash}>
    <Text style={styles.dash}></Text>
    </View>
   </View>
<View style={styles.Gstindashandnumber}>
  <Text style={styles.gstdash}></Text>
   <View style={styles.GSTINandNumbercontainer}>
      <View style={styles.gstinTextcontainer}>
    <Text style={styles.gstinText}>GSTIN :</Text>
    </View>
    <View style={styles.gstinnumbercontainer}>
    <Text style={styles.gstinText}>{gstin}</Text>
    </View>
   </View>
</View>
   </View>
   <View style={styles.footer}>
    <View style={styles.website}>
    <Text style={styles.websiteText}>{website}</Text>
    </View>
    <View style={styles.companyemail}>
      <Text style={styles.companyemailText}>{dealeremailid}</Text>
    </View>
   </View>
   </View>
  {/* Share Button */}
  <Button title="Share as PDF" onPress={handleSharePDF} />
  </ScrollView>
  </View>
</ScrollView>

 )
}

const styles = StyleSheet.create({
  bodypage: {
    padding:5,
    width: 595,
    height: 1065,
    justifyContent: 'center',
    marginLeft:90,
    backgroundColor: '#ffffff',
  },
  heading: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#303030',
    backgroundColor: '#EBF2FF',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 174,
    paddingVertical: 6,
    paddingHorizontal: 0,
    flexShrink: 0,
  },
  re: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  relogo: {
    alignSelf: 'stretch',
    borderRadius: 5,
    width: 154,
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    flexShrink: 0,
  },
  termsText: {
    color: '#1A1C21',
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  termssubText: {
    color: '#1A1C21',
    fontFamily: 'Inter',
    fontSize: 8,
    fontWeight: '600',
    width: 220,
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 595,
    padding: 0,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  header: {
        flexDirection: 'column',
    alignItems: 'flex-start',
  },
  headerText: {
    color: '#1A1C21',
    fontFamily: 'Poppins',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: 32,
    textTransform: 'uppercase',                                                                       
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 595,
    padding: 0,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  customerdetailscontainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginVertical: 2,
  },
  companydetailscontainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  header2Text: {
    color: '#1A1C21',
    fontFamily: 'Poppins',
    fontSize: 10,
    letterSpacing: 0.4,
    fontWeight: '900',
    lineHeight: 14,
    textDecorationLine: 'underline',
  },
  headersubtext: {
    color: '#303030',
    fontFamily: 'Poppins',
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 14,
    letterSpacing: 0.1,
  },
  showroomsubText: {
    color: '#5E6470',
    fontFamily: 'Poppins',
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'right',
  },
  EnquiryandVehicle:{
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 10,
    flex: 1,
    alignSelf:'stretch',
  },
  vehsubText:{
    color: '#1a1c21',
    fontFamily:'Inter',
    fontSize:12,
    fontWeight: '700',
    lineHeight: 14,
  },
  vehnamesubText:{
    color: '#1a1c21',
    fontFamily:'Inter',
    fontSize:12,
    fontWeight: '700',
    lineHeight: 12,
  },
 optionaladdoncontainer:{
   borderRadius: 12,
    borderWidth: 0.5,
    borderColor: '#D7DAE0',
    marginTop:2,
 },
  showroomnameText: {
    color: '#4C63ED',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
  },
  container3: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottomWidth:1,
    borderColor:'#d7dae0',
  },
  subText: {
    color: '#5E6470',
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '600',
    width: 80,
  },
  date:{
    flexDirection:'column',
    alignItems:'flex-start',
    margin: 2,
    flex: 1,
    borderRightWidth: 0.5,
    borderRightColor:'d7dae0',
  },
  dateText: {
    color: '#1A1C21',
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '800',
    lineHeight: 14,
    width: 80,
  },
  eqnum:{
    flexDirection:'column',
    alignItems:'flex-start',
    margin: 2,
    flex: 1,
  },
  eqnumText: {
    color: '#1A1C21',
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '600',
  },
  container4: {
    padding:5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  vehicledetails: {
    alignItems: 'center',
    marginRight: 10,
    justifyContent:'center',
  },
  vehiclename: {
    color: '#5E6470',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    margin:2,
  },
  bike: {
    objectFit:'scale-down',
    alignSelf: 'stretch',
    borderRadius: 5,
    width: 201,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    margin:5,
  },
  enqvehimage:{
    alignItems:'center',
    flexDirection:'row',
    width: 560,
  },
  quotationhead:{
    height: 25,
    padding: 5,
    alignItems: 'flex-start',
    flexShrink: 0,
    alignItems: 'Stretch',
    borderBottomWidth: 0.5,
    backgroundColor: '#EBF2FF',
    borderBottomColor: '#d7dae0',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  subheadings:{
    flex: 1,
    color: '#1a1c21',
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: 600,
    lineHeight: 14,
    paddingLeft: 5,
  },
  quotationbody:{
    padding: 10,
    margin: 5,
  },
  onroadsubText: {
    color: '#1A1C21',
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '800',
  },
  addonproducttext:{
        color: '#1A1C21',
        fontFamily: 'Inter',
        fontSize: 10,
        fontWeight: '800',
  },
  quotationheadtext:{
    color: '#1a1c21',
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 14,
  },
  rupeessymbol:{
    padding: 1,
    paddingRight: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  symbolText9:{
    color: '#4358d1',
    textAlign:'right',
    fontFamily:'Inter',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  pricesubText: {
    color: '#5E6470',
    fontFamily: 'Inter',
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'right',
  },
  onroadpricecontainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D7DAE0',
    flexShrink: 0,
  },
  container5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#D7DAE0',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexShrink: 0,
  },
  symbol1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 3,
  },
  symbolText: {
    color: '#5e6470',
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
  },
  value:{
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:10,
  },
  container8: {
    alignSelf:'stretch',
    backgroundColor:'#f9fafc', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    alignContent:'center',
    flexShrink: 0, 
    borderBottomLeftRadius:12,
    borderBottomRightRadius:12,
  },
  AandBpricetotal:{
    alignItems: 'flex-start',
    marginLeft: 5,
    flex: 1,
  },
  pricetotal:{
    color: '#4358d1',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '700',
  },
  rupeesword:{
    alignItems: 'flex-start',
  },
  rupeesinr:{
    color: '#4358d1',
    textAlign:'right',
    fontFamily:'Inter',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  grandrupeesword:{
    alignItems: 'flex-start',
  },
  grandrupeesvalue:{
    alignItems: 'flex-start',
    margin: 5,
  },
  grandtotalvalue:{
    justifyContent:'flex-end',
    alignItems: 'center',
    flexDirection:'row',
  },
  rupeesvalue:{
    alignItems: 'flex-start',
    margin: 10,
  },
  AandBtotal: {
    color: '#4358D1',
    textAlign: 'right',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  symbol8: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent:'flex-end',
      flex: 1,
  },
  totalpricebody: {
    width: 320,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D7DAE0',
    backgroundColor:'#f9fafc',
  },
  pricetotalText: {
    color: '#4358D1',
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '700',
  },
  grandtotalvalueText:{
    color: '#4358d1',
    textAlign:'right',
    fontFamily:'Inter',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
  },
  grandtotalheader:{
    alignItems:'flex-start',
    paddingVertical: 0,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  onroadvalue:{
    justifyContent: 'flex-end',
    alignItems:'center',
    flexDirection:'row',
    flex: 1,
  },
  grandtotalcontainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    flex:1,
    alignSelf:'stretch',
    borderBottomLeftRadius:12,
    borderBottomRightRadius:12,
    borderTopWidth: 1,
    borderColor:'#D7DAE0',
    backgroundColor: '#f9fafc',
  },
  termsandgrandcontainer:{
    flexDirection:'row',
    alignItems: 'flex-start',
    height: 120,
    padding: 5,
  },
 onroadtotalpricecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
     borderTopLeftRadius:12,
     borderTopRightRadius:12,
    borderBottomWidth: 0.5,
    borderColor: '#D7DAE0',
  },
  optionaladdontotalpricecontainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  grandtotalText: {
    color: '#4358d1',
    textAlign:'left',
    fontFamily:'Inter',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.28,
  },
  total:{
    paddingVertical: 0,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
  },
  namecompany: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
gstdash:{
  width: 200,
  height: 1,
  backgroundColor: '#1a1c21',
},
  GSTINandNumbercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gstinText: {
    color: '#1A1C21',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
  },
  gstinTextcontainer:{
    paddingRight: 5,
    justifyContent:'center',
    alignItems:'center',
  },
  gstinnumbercontainer:{
    justifyContent:'center',
    alignItems:'center',
  },
  GSTINandNumbercontainer:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'flex-start',
  },
  nameText: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
  },
  employeenamecontainer:{
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    marginRight:10,
  },
  dash:{
    width: 150,
    height: 1,
    backgroundColor: '#000',
  },
  employeenamedash:{
    padding: 5,
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  name:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  contact:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  ForText: {
    color: '#1A1C21',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  For:{
    paddingRight: 5,
    justifyContent:'center',
    alignItems:'center',

  },
  companyText: {
    color: '#1A1C21',
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'right',
  },
  companyname:{
    justifyContent:'center',
    alignItems:'center',
  },
  company:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'flex-start',
  },
  contactgst:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    paddingTop:30,
  },
  websiteText: {
    color: '#5E6470',
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '500',
  },
    companyemailText: {
    color: '#5E6470',
    textAlign: 'right',
    fontFamily: 'Inter',
    fontSize: 10,
    fontWeight: '500',
  },
  website:{
    width: 107,
    justifyContent: 'space-between',
    alignItems:'center',
    flexShrink:0,
   },
   companyemail:{
    width: 156,
    justifyContent:'space-between',
    alignItems:'center',
    flexShrink:0,
   },
   footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 585,
    height: 30,
    paddingLeft: 32,
    paddingRight: 32,
    alignItems:'center',
    flexShrink: 0,
    borderTopColor:'#d7dae0',
    borderTopWidth:0.5,
    backgroundColor: '#EBF2FF',
  },
});

export default SharePdf;




