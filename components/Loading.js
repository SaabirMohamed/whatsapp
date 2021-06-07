import Image from "next/image";
import { ThreeBounce } from "better-react-spinkit";
const Loading = () => {
  return (
    <center>
      <div>
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
          alt="whatsapp logo ... loading"
          height={200}
          width={200}
          style={{ marginBottom: 10 }}
        />
        <center>
          <ThreeBounce color="#3cbc28" />;
        </center>
      </div>
    </center>
  );
};

export default Loading;
