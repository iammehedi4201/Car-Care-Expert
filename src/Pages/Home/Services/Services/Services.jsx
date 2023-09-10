/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  // console.log("services is :-",services);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <section className="text-center">
        <h3 className="text-[#FF3811] font-bold text-xl">Services</h3>
        <h1 className="text-4xl font-bold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which do not look even slightly
          believable.{" "}
        </p>
      </section>
      <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-12">
        {services.slice(1,7).map((service) => (
          <ServiceCard key={service.service_id} service={service}></ServiceCard>
        ))}
      </section>
    </div>
  );
};

export default Services;
