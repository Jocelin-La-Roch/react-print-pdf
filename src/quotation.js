import React from "react"
//import {Card} from 'reactstrap';

import './assets/scss/pages/users.scss';

const logoCI = require('./LogoCI.png');

class QuotationDetails extends React.Component {
     
render() {
    
    return (

        <div className="px-4 pb-4">
          <div className="row justify-content-between align-items-center">
            <div className="col col-12 col-md-6 col-lg-4 overflow-hidden text-md-left text-lg-left text-center">
              <img className='w-full ' style={{margin: "15px 0px 15px 5px", height: "50px"}} src="./logo.svg" alt="Digital Trade logo"/>
            </div>
            <div className="col col-12 col-md-6 col-lg-4 text-md-right text-lg-right text-center">
              <h2>Cotation</h2>
              <h4 className='text-black-50'>#HU45LO</h4>
            </div>
          </div>


          <div className="row">
            <div className="col col-12 text-center text-md-left">
              <ul className="p-0 list-style-none " style={{marginTop: "15px"}} >
                <li className='my-1'>40 Rue Paul Langevin, Abidjan
                </li>
                <li className='my-1'>
                </li>
                <li className='my-1'>
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col col-12 col-md-7 offset-md-5 text-center text-md-left mt-5 mb-4">
              <p className="text-black">
                18 jun 2021
              </p>
              <p className="text-black mt-1">
                A
              </p>
              <p className="text-black mt-2">
                Richard bona
              </p>
              <p className="text-black mt-1">
                Paul Client
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col col-12  text-center text-md-left">

              <p>Chère &nbsp;
                Richard Bona, </p>

              <p className='my-4'>
                En référence à votre demande de coût de dédouanement, veuillez trouver ici notre offre pour votre expédition, telle que décrite ci-dessous.
              </p>
            </div>
            <div className="col col-12">
              <table className="table table-borderless">
                <tbody>
                <tr className="w-full">
                  <th className="text-right w-half">Service :</th>
                  <th className="text-left">Port Maritime</th>
                </tr>
                <tr>
                  <th className="text-right w-half">Lieu d'opération :</th>
                  <th className="text-left">Abidjan</th>
                </tr>
                <tr>
                  <th className="text-right w-half">Valeur CFR :</th>
                  <th className="text-left">499 000</th>
                </tr>
                <tr>
                  <th className="text-right w-half">Expédition soumise à la TVA ? :</th>
                  <th className="text-left">oui</th>
                </tr>
                  <tr>
                    <th className="text-right w-half">Cette opération est sujette à l'inspection phytosanitaire ? :</th>
                    <th className="text-left">oui</th>
                  </tr>
                </tbody>
              </table>
            </div>
 
              <div className="col col-12 overflow-auto">
                <table className="table text-center">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">conteneur</th>
                      <th scope="col">Poids (Kg)</th>
                      <th scope="col">volume</th>
                      <th scope="col">Type de marchandise</th>
                      <th scope="col">Dangereux ?</th>
                      <th scope="col">Type de transport</th>
                      <th scope="col">Lieu de livraison</th>

                    </tr>
                  </thead>
                  <tbody>
               

                  
                        <tr >
                          <th scope="row">Riz</th>
                          <th>400</th>
                          <th>50</th>
                          <th>Coteneur plein</th>
                          <th>oui</th>
                          <th>Port maritime</th>
                          <th>abidjan</th>
                        </tr>
                      
                  </tbody>
                </table>
              </div>
        
         
        
            
             <div className="col col-12 overflow-auto">
                <table className="table text-center">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Marchandise</th>
                      <th scope="col">Poids (Kg)</th>
                      <th scope="col">Volume</th>
                      <th scope="col">Largeur</th>
                      <th scope="col">Hauteur</th>
                      <th scope="col">Longueur</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <th scope="row">okay</th>
                      <th>100</th>
                      <th>100</th>
                      <th>100</th>
                      <th>100</th>
                      <th>100</th>
                    </tr>
                  </tbody>
                </table>
              </div>

          
              <div className="col col-12">
                <table className="table text-center">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Type de marchandise</th>
                      <th scope="col">Destination finale</th>
                      <th scope="col">Poids (kg)</th>
                      <th scope="col">Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <th>marchandise</th>
                    <th>Cote d'ivoire</th>
                    <th>100</th>
                    <th>100</th>
                  </tbody>
                </table>
              </div>
        

          </div>

          <div className="row">
            <div className="col col-12 mt-4 mb-4">
              <h3 className="offer-size">Notre offre est de : 288 000 XAF</h3>
              <div className="col col-12 px-5 mt-3">
                <p>Cette operation inclus : </p>
                <ul className='list-style-square'>
                  
                      <li>livraison</li>
                      <li>Transport</li>
                    
                </ul>
              </div>
              <div className="col col-12 px-5 mt-3">
                <p>Cette operation inclut :</p>
                <ul className='list-style-square'>
                      <li>name</li>
                </ul>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col col-12 text-center text-md-left pb-8">
              <p className="text-center text-md-left mb-3">
                    Cette offre est valide jusqu'au &nbsp;
                 29 Jun 2021. &nbsp;
                Les prix sont sujets à changement sans préavis. Sauf erreur ou omission.
              </p>

              <p className="text-center text-md-left mb-1">
                N'hésitez pas à nous contacter en cas de besoin de clarification ou d'informations additionnelles, nous sommes impatients de vous servir.
              </p>
            </div>

            <div className="col col-12 text-center text-md-left mt-5 pb-8">
              <p className="text-center mb-2">
                Jean Claude SCHMIDT
              </p>
              <p className="text-center text-black-50 mb-1">
                    Directeur Général
              </p>
              <p className="text-center">
                <img src="https://demo.itrade.digital/assets/img/pages/signature-scan.png" alt="Jean Claude SCHMIDT Signature"/>
              </p>
            </div>
          </div>

        </div>
    )
  }
}

export default QuotationDetails
