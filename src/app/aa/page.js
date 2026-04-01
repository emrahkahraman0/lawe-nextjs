import services from "@/templates/Services";
import Image from "next/image";
import Link from "next/link";

function Services() {
  return (
    <>
      <div id="services">
        <div className="container">
          <div className="services row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
            {services.map((service) => (
              <div className="services_item" key={service.id}>
                <Image
                  className="img_fluid"
                  src={service.small_image}
                  width={300}
                  height={300}
                  alt={service.title}
                />

                <h6>
                  <Link href={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h6>
                <p>{service.description}</p>
                <Link className="read_more" href={`/services/${service.slug}`}>
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*services#*/}
    </>
  );
}

export default Services;
