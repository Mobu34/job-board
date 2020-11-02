import React from "react";
import JobItem from "./JobItem";

const Jobs = (props) => {
  return (
    <main>
      <div>
        <JobItem
          className={props.jobStyle}
          color="#E30413"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <JobItem
          className={props.jobStyle}
          color="#3EA535"
          title="Agent de sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
        <JobItem
          className={props.jobStyle}
          color="#FFEE00"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Paris"
        />
      </div>
      <div>
        <JobItem
          className={props.jobStyle}
          color="#039FE3"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <JobItem
          className={props.jobStyle}
          color="#F8C5AF"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <JobItem
          className={props.jobStyle}
          color="#E30413"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
      </div>
      <div>
        <JobItem
          className={props.jobStyle}
          color="#3EA535"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
        <JobItem
          className={props.jobStyle}
          color="#FFEE00"
          title="CRM & Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New York"
        />
        <JobItem
          className={props.jobStyle}
          color="#039FE3"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </div>
    </main>
  );
};

export default Jobs;
