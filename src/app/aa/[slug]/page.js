import services from "@/templates/Services";
import Image from "next/image";
import { notFound } from "next/navigation";

async function ServicesDetail({ params }) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <div id="services_detail">
        <div className="container">
          <div className="services_detail align_items row row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-sm-1">
            <div className="services_detail_image">
              <Image
                className="img_fluid"
                src={service.large_image}
                width={600}
                height={600}
                alt={service.title}
              />
            </div>
            {/*services_detail_image*/}
            <div className="services_detail_text">
              <h6>{service.title}</h6>
              <p>{service.description}</p>
            </div>
            {/*services_detail_text*/}
          </div>
          {/*services_detail*/}
        </div>
        {/*container*/}
      </div>
      {/*services_detail*/}
    </>
  );
}

export default ServicesDetail;
