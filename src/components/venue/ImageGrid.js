import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function ImageGrid({ images }) {
  // src={`data:image/jpeg;base64,${image}`}
  // console.log(images);
  // return (
  //   <div className="grid grid-cols-2 gap-2">
  //     <Image
  //       alt="Woman listing to music"
  //       className="h-full rounded-none object-cover rounded-l-xl"
  //       src={`data:image/jpeg;base64,${images && images[0].image}`}
  //       // src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=960"
  //     />
  //     <div className="grid grid-cols-2 gap-2">
  //       <Image
  //         alt="Woman listing to music"
  //         className="rounded-none object-cover"
  //         src={`data:image/jpeg;base64,${images && images[1].image}`}
  //         // src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=960"
  //       />
  //       <Image
  //         alt="Woman listing to music"
  //         className="rounded-none object-cover rounded-r-xl"
  //         src={`data:image/jpeg;base64,${images && images[2].image}`}
  //         // src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=960"
  //       />
  //       <Image
  //         alt="Woman listing to music"
  //         className="rounded-none object-cover"
  //         src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=960"
  //       />
  //       <Image
  //         alt="Woman listing to music"
  //         className="rounded-none object-cover rounded-r-xl"
  //         src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=960"
  //       />
  //     </div>
  //   </div>
  // );

  // ------------------------------
  return (
    <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 justify-self-center">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={`data:image/jpeg;base64,${images && images[0].image}`}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={`data:image/jpeg;base64,${images && images[1].image}`}
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={`data:image/jpeg;base64,${images && images[2].image}`}
        />
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={`data:image/jpeg;base64,${images && images[2].image}`}
        />
      </Card>
      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={`data:image/jpeg;base64,${images && images[2].image}`}
        />
      </Card>
    </div>
  );
}
