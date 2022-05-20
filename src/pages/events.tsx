import { FunctionComponent, useEffect, useRef } from "react";
import Card from "../components/card";
import { Box } from "@mui/material";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where } from "firebase/firestore";
import { firestore } from "../firebase";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [artClub, ArtClubloading] = useCollection(
    query(collection(firestore, "events"), where("club", "==", "art club"))
  );
  const [techClub, TechClubLoading] = useCollection(
    query(collection(firestore, "events"), where("club", "==", "tech club"))
  );
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div>
      <div className="font-bold underline text-center m-4 mt-16 text-3xl">
        envents
      </div>
      <div className="font-semibold text-center m-4  text-3xl">
        let knowledge inculcated by fun !
      </div>
      <div className="mt-5 font-semibold text-center m-4  text-3xl">
        art club
      </div>
      <Box
        margin={"10px"}
        display="flex"
        sx={{
          flexWrap: "wrap",
        }}
        gap={"30px"}
        alignItems="center"
        justifyContent="center"
      >
        {artClub?.docs.map((doc) => (
          <Card
            key={doc.id}
            name={doc.data().name}
            description={doc.data().description}
            date={doc.data().date}
          />
        ))}
        {artClub?.docs.length === 0 && !ArtClubloading && (
          <div className="text-center h-16 text-xl font-semibold">
            No events found
          </div>
        )}
      </Box>
      <div className="mt-8 font-semibold text-center m-4  text-3xl">
        tech club
      </div>
      <Box
        marginTop={"60px"}
        margin={"10px"}
        display="flex"
        sx={{
          flexWrap: "wrap",
        }}
        gap={"30px"}
        alignItems="center"
        justifyContent="center"
      >
        {techClub?.docs.map((doc) => (
          <Card
            key={doc.id}
            name={doc.data().name}
            description={doc.data().description}
            date={doc.data().date}
          />
        ))}
        {techClub?.docs.length === 0 && !ArtClubloading && (
          <div className="text-center h-16 text-xl font-semibold">
            No events found
          </div>
        )}
      </Box>
    </div>
  );
};

export default Home;
