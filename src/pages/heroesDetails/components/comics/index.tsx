import { useEffect, useState } from 'react';
import {
  Container,
  Description,
  DetailsContainer,
  ImgBackground,
  Name,
  Date,
  DateCountDiv,
} from './styles';
import { Comic, Items } from '../../../../store/charactersSlice';
import { fetchMarvelComics } from '../../../../services/marvelApi';
import { format, isValid, parseISO } from 'date-fns';
import { setLoading } from '../../../../store/loadingSlice';
import { useDispatch } from 'react-redux';

interface IComicsDetailsProps {
  comics: Comic[];
}

export default function ComicsDetails({ comics }: IComicsDetailsProps) {
  const [hq, setHq] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Comics Details', comics);
  }, [comics]);

  useEffect(() => {
    const fetchComics = async () => {
      dispatch(setLoading(true));

      try {
        const data = await fetchMarvelComics(comics?.collectionURI);
        setHq(data);
        console.log('dada', data);
      } catch (error) {
        console.error('Erro ao buscar os quadrinhos:', error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchComics();
  }, []);
  return (
    <>
      {hq?.slice(0, 5)?.map((comic: Items, index) => (
        <Container key={comic.id}>
          <ImgBackground
            key={index}
            src={`${comic.images[0]?.path}.${comic.images[0]?.extension}`}
            alt={comic?.images?.path || 'Comic Image'}
          />
          <DetailsContainer>
            <Name>{comic.title}</Name>
            <DateCountDiv>
              <Date>
                {comic?.modified && isValid(parseISO(comic?.modified))
                  ? format(parseISO(comic?.modified), 'dd/MM/yy')
                  : 'Data indisponível'}
              </Date>
              <Date>{comic?.pageCount} pages</Date>
            </DateCountDiv>

            <Description>
              {comic?.description
                ? comic.description.length > 200
                  ? `${comic.description.slice(0, 200)}...`
                  : comic.description
                : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium...'.slice(
                    0,
                    200
                  )}
            </Description>
          </DetailsContainer>
        </Container>
      ))}
    </>
  );
}
