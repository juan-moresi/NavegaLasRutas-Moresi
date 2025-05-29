# Sneakers Shop - Tienda Online de Calzado

## 📋 Descripción
Sneakers Shop es una aplicación web de e-commerce desarrollada con React, especializada en la venta de calzado deportivo y casual. La plataforma ofrece una experiencia de compra completa y fluida, desde la navegación por categorías hasta el proceso de finalización de compra.

## ✨ Características Principales
- Catálogo Completo : Amplia variedad de zapatillas organizadas por categorías (running, casual, basketball, skate, training, lifestyle).
- Navegación Intuitiva : Sistema de filtrado por categorías, precios y tallas.
- Carrito de Compras : Gestión completa con persistencia en localStorage.
- Proceso de Checkout : Formulario de compra con validaciones y confirmación de pedido.
- Diseño Responsivo : Experiencia optimizada para todos los dispositivos.
- Sección de Contacto : Formulario para consultas y soporte.

## 🛠️ Tecnologías Utilizadas
- React 19 : Biblioteca principal para la construcción de la interfaz.
- React Router 7 : Sistema de navegación entre páginas.
- Context API : Gestión del estado global para el carrito de compras.
- CSS Modular : Estilos organizados por componentes.
- Vite : Herramienta de construcción y desarrollo.
- Lucide React : Iconos modernos para la interfaz.

## 🚀 Flujo de Usuario
1. Página de Inicio : Banner principal, categorías destacadas y productos recomendados.
2. Navegación : Exploración por categorías o catálogo completo.
3. Detalle de Producto : Información detallada, selección de talla y cantidad.
4. Carrito : Gestión de productos seleccionados con opciones para modificar cantidades.
5. Checkout : Formulario para completar la compra con validaciones.
6. Confirmación : Mensaje de éxito con ID de pedido.

## 🛒 Funcionalidades del Carrito
- Agregar productos : Con selección de talla y cantidad.
- Modificar cantidades : Ajuste de unidades para cada producto.
- Eliminar productos : Opción para quitar items individuales o vaciar el carrito.
- Persistencia : Almacenamiento en localStorage para mantener datos entre sesiones.
- Cálculo automático : Actualización en tiempo real del total y cantidad de items.

## 📦 Gestión de Datos
La aplicación utiliza datos simulados (mock) con las siguientes funciones:

- getProducts() : Obtiene todos los productos disponibles.
- getProductById(id) : Recupera un producto específico por su ID.
- getProductsByCategory(category) : Filtra productos por categoría.
- getCategories() : Obtiene todas las categorías disponibles.

## 📱 Responsive Design
La aplicación está completamente optimizada para diferentes tamaños de pantalla:

- Dispositivos móviles : Menú adaptable y diseño fluido.
- Tablets : Visualización optimizada para pantallas medianas.
- Escritorio : Aprovechamiento del espacio con layouts en grid.
## 🔍 Filtros de Productos
El sistema de filtrado permite a los usuarios:

- Filtrar por categoría de producto.
- Seleccionar rangos de precio.
- Filtrar por tallas específicas (adaptadas según el tipo de producto).
## 📞 Contacto
Para consultas o sugerencias sobre la aplicación, utiliza la sección de contacto disponible en la navegación principal.

© 2025 Sneakers Shop - Todos los derechos reservados