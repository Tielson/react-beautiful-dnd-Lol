import { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { Card } from '../../components/Cards'
import { champions } from '../../lib/champions'
import { Container } from './styles'

interface ChampionProps {
  name: string
  tags: string[]
  id: string
  key: string
}

function TaskList() {
  const [heroesInList1, setHeroesInList1] = useState<ChampionProps[]>([])
  const [heroesInList2, setHeroesInList2] = useState<ChampionProps[]>([])
  const [filter, setFilter] = useState('')

  const filteredHeroes = heroesInList1.filter((hero) =>
    hero.name.toLowerCase().includes(filter.toLowerCase()),
  )
  const onDragEnd = (result: any) => {
    if (!result.destination) return

    const sourceList = result.source.droppableId
    const destinationList = result.destination.droppableId

    let sourceArray, destinationArray

    if (sourceList === 'list1') {
      sourceArray = heroesInList1
    } else if (sourceList === 'list2') {
      sourceArray = heroesInList2
    }

    if (destinationList === 'list1') {
      destinationArray = heroesInList1
    } else if (destinationList === 'list2') {
      destinationArray = heroesInList2
    }

    if (destinationArray === heroesInList2 && destinationArray.length >= 5) {
      // Impedir adição se a lista 2 já tiver 5 itens
      return
    }

    const [movedHero] = sourceArray.splice(result.source.index, 1)
    destinationArray.splice(result.destination.index, 0, movedHero)

    setHeroesInList1([...heroesInList1])
    setHeroesInList2([...heroesInList2])
  }

  useEffect(() => {
    champions.get('').then((response) => {
      const arrayHeroes = Object.keys(response.data.data).map(
        (championName) => ({
          name: championName,
          ...response.data.data[championName],
        }),
      )
      setHeroesInList1(arrayHeroes)
    })
  }, [])

  return (
    <Container>
      <div className="input">
        <h1 style={{ textAlign: 'center', marginTop: '30px' }}>
          Melhor comp para Solo/Duo!
        </h1>
        <input type="text" onChange={(e) => setFilter(e.target.value)} />
      </div>
      <div className="box">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list2" type="TASK">
            {(provided) => (
              <ul
                className="selected"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {heroesInList2.map((hero, index) => (
                  <Draggable
                    key={hero.key}
                    draggableId={hero.key}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        key={hero.key}
                        ref={provided.innerRef}
                        draggable="true"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card name={hero.id} tags={hero.tags} />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
          <Droppable droppableId="list1" type="TASK">
            {(provided) => (
              <ul
                className="list"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {filteredHeroes.map((hero, index) => (
                  <Draggable
                    key={hero.key}
                    draggableId={hero.key}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        key={hero.key}
                        ref={provided.innerRef}
                        draggable="true"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Card name={hero.id} tags={hero.tags} />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </Container>
  )
}

export default TaskList
