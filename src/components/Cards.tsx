import { Container } from './styles'

interface CardProps {
  name: string
  tags: string[]
}

export function Card({ name, tags }: CardProps) {
  return (
    <Container>
      <div>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`}
          alt=""
        />
      </div>
      <div className="titleName">
        <div>
          <h3>{name}</h3>
        </div>
        <div>
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
      </div>
    </Container>
  )
}
