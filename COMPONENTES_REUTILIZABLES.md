# Componentes Reutilizables - Documentación

## Resumen
Se han extraído 9 componentes reutilizables del archivo `ComponentShowcase.jsx` para hacer el código más modular y reutilizable en otros proyectos.

## Componentes Básicos (ya existían)
- **Button**: Botones con múltiples variantes y tamaños
- **Card**: Contenedores con sombra y bordes redondeados
- **Badge**: Etiquetas de estado con colores personalizables
- **Input**: Campos de entrada con etiquetas y validación
- **Navbar**: Barra de navegación profesional

## Componentes Nuevos Extraídos

### 1. **HeroSection**
```jsx
<HeroSection 
  title="Component"
  subtitle="Library" 
  description="Descripción del hero"
  primaryAction={{ text: "Acción Principal", onClick: () => {} }}
  secondaryAction={{ text: "Acción Secundaria", onClick: () => {} }}
/>
```
**Uso**: Secciones hero para páginas de inicio

### 2. **ProductCard**
```jsx
<ProductCard 
  title="Producto Premium"
  description="Descripción del producto"
  price="$99"
  badge={{ text: "Destacado", color: "blue" }}
  ctaText="Comprar Ahora"
  onCTAClick={() => {}}
/>
```
**Uso**: E-commerce, catálogos de productos

### 3. **UserProfileCard**
```jsx
<UserProfileCard 
  name="Victor Mestrada"
  role="Full Stack Developer"
  avatar="url-imagen.jpg" // opcional
  badges={[
    { text: "React", color: "green" },
    { text: "Node.js", color: "blue" }
  ]}
  ctaText="Ver Perfil"
  onCTAClick={() => {}}
/>
```
**Uso**: Perfiles de usuario, equipos, directorios

### 4. **SystemStatusCard**
```jsx
<SystemStatusCard 
  title="Estado del Sistema"
  status={{ text: "En Línea", color: "green" }}
  metrics={[
    { label: "CPU", value: 75, color: "green" },
    { label: "Memoria", value: 50, color: "blue", showPercentage: true }
  ]}
/>
```
**Uso**: Dashboards, monitoreo de sistemas

### 5. **LoginForm**
```jsx
<LoginForm 
  title="Iniciar Sesión"
  onSubmit={(data) => console.log(data)}
  showRememberMe={true}
  showForgotPassword={true}
/>
```
**Uso**: Autenticación, páginas de login

### 6. **ContactForm**
```jsx
<ContactForm 
  title="Formulario de Contacto"
  onSubmit={(data) => console.log(data)}
/>
```
**Uso**: Páginas de contacto, formularios de feedback

### 7. **ResponsiveGrid**
```jsx
<ResponsiveGrid 
  title="Sistema Responsivo"
  description="Descripción personalizada"
  itemCount={6}
/>
```
**Uso**: Demos de responsive design, documentación

### 8. **ProgressBar**
```jsx
<ProgressBar 
  value={75}
  max={100}
  color="blue"
  size="md"
  showLabel={true}
/>
```
**Uso**: Indicadores de progreso, métricas, dashboards

### 9. **Textarea**
```jsx
<Textarea 
  label="Mensaje"
  placeholder="Escribe aquí..."
  rows={4}
  error="Mensaje de error"
/>
```
**Uso**: Formularios con campos de texto largo

## Ventajas de la Refactorización

### ✅ Reutilización
- Todos los componentes son independientes
- Pueden usarse en cualquier proyecto React + Tailwind
- Props configurables para diferentes casos de uso

### ✅ Mantenimiento
- Código más limpio y organizado
- Fácil de actualizar (cambio en un lugar afecta todo)
- Mejor separación de responsabilidades

### ✅ Desarrollo Ágil
- Componentes listos para usar
- Consistencia visual automática
- Menos código repetitivo

### ✅ Testing
- Cada componente puede testearse individualmente
- Props bien definidas facilitan las pruebas
- Mejor cobertura de código

## Uso en Otros Proyectos

### Instalación
1. Copiar el archivo `components.jsx`
2. Asegurar que Tailwind CSS esté configurado
3. Importar los componentes necesarios:

```jsx
import { 
  Button, 
  Card, 
  ProductCard, 
  UserProfileCard,
  LoginForm 
} from './components'
```

### Personalización
Cada componente acepta una prop `className` para personalizaciones adicionales:

```jsx
<ProductCard 
  className="shadow-xl border-2 border-blue-500"
  // ... otras props
/>
```

## Estructura de Archivos Recomendada

```
src/
  components/
    ui/
      Button.jsx
      Card.jsx
      Badge.jsx
      Input.jsx
      Textarea.jsx
      ProgressBar.jsx
    business/
      ProductCard.jsx
      UserProfileCard.jsx
      SystemStatusCard.jsx
      LoginForm.jsx
      ContactForm.jsx
      HeroSection.jsx
      ResponsiveGrid.jsx
    layout/
      Navbar.jsx
    index.js // Re-exportar todos los componentes
```

Este enfoque modular hace que el código sea más escalable, mantenible y reutilizable en diferentes proyectos.