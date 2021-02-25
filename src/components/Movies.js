import { useEffect, useState } from 'react';
import { Button, Card} from 'antd';

const Movies = ({ movies }) => {

    const { Meta } = Card;
    const [omdbId, setOmdbId] = useState([]);
    const [currentMovie, setCurrentMovie] = useState([]);


    useEffect(() => {
        const getData = async () => {
            if (omdbId) {
                const response = await fetch(
                    `http://www.omdbapi.com/?apikey=b66fe896&i=${omdbId}`
                );
                const data = await response.json();
                setCurrentMovie(data);
            };
        };
        getData();
    }, [omdbId]);

    return (
        <>
        <div>
           {movies.map((movie, id) => (
                        <Card
                            style={{ width: 350 }}
                            cover={
                                <img
                                    alt="poster"
                                    src={movie.Poster}
                                />
                            }
                            actions={[
                                <Button type="link">Ver más</Button>
                            ]}
                        >
                            <Meta
                                title={movie.Title}
                                description={movie.Year}
                            />
                        </Card>
                        ))
}
</div>
    </>
    );
}



export default Movies;