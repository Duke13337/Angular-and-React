import Greeting from './components/Greeting';
import Product from './components/Product';
import Avatar from './components/Avatar';
import Card from './components/Card';
import Button from './components/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* ===== Задача 1: Greeting ===== */}
      <h1>Задача 1: Greeting</h1>
      <Greeting name="Иван" />
      <Greeting name="Мария" greeting="Здравствуйте" />
      <Greeting />

      <hr />

      {/* ===== Задача 2: Product ===== */}
      <h1>Задача 2: Product</h1>
      <Product title="Ноутбук" price={75000} discount={15} />
      <Product title="Мышь" price={1500} discount={10} />

      <hr />

      {/* ===== Задача 3: Avatar ===== */}
      <h1>Задача 3: Avatar</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Avatar name="Анна" size={32} />
        <Avatar name="Борис" size={48} />
        <Avatar name="Виктория" size={80} />
      </div>

      <hr />

      {/* ===== Задача 4: Card ===== */}
      <h1>Задача 4: Card</h1>
      <Card title="О проекте">
        <p>Учебный проект по React — компоненты и пропсы.</p>
        <Button>Подробнее</Button>
      </Card>

      <hr />

      {/* ===== Задача 5: Button ===== */}
      <h1>Задача 5: Button</h1>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button>Default (primary)</Button>
        <Button variant="primary" disabled>Disabled</Button>
        <Button variant="danger" disabled>Удалить</Button>
        <Button
          variant="primary"
          onClick={() => alert('Кнопка нажата!')}
        >
          Нажми меня
        </Button>
      </div>
    </div>
  );
}

export default App;