import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useState, useEffect } from "react";
import { MoviePage } from "Types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);//userstate um hook que mantem o estado do componente , para q ele não seja renderizado mais de uma vez no ciclo de vida do react

    //estamos definindo que o tipo de esta é <MoviePage>
    const [page, setPage] = useState<MoviePage>({//esse estado guarda a pagina que foi buscada na requisição
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => { //usereffect só executará essa função quando carregar o componente
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)//ultizamos o .then para executar algo depois da resposta chegar
            .then(response => {
                const data = response.data as MoviePage;//pega o corpo da resposta como sendo um object MoviePage
                setPage(data);//salvando a pagina que voltou da requisição


            });
    }, [pageNumber]);

    const handlePageChange = (newPageNumber : number) => {
        setPageNumber(newPageNumber);//atualizando o valor do useState
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange}/>
            
            <div className="container">
                <div className="row">
                    {page.content.map(movie => (//.map permite que façamos operações em cada elemento da coleção , nesse caso de cada filme
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )}
                </div>
            </div>
        </>

    );
}

export default Listing;