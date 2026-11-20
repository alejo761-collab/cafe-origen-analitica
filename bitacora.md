# Bitacora sobre cafe-origen-analitica

## Dia 1 microreto 1

### Diccionario de datos 

| Propiedad | Tipo | Significado |
|:----------|:------|:-----------|
|`id`|`number`| Es un identificador unico|
|`fecha`|`string`| Es un tipo de texto que indica la fecha del pedido|
|`cliente`|`string`| Muestra el identificador de cada cliente |
|`producto`|`string`| Muestra el tipo de producto que pidieron los clientes|
|`ciudad`|`strings`| Ciudad a donde va el producto o ciudad de la que sale el producto|
|`cantidad`|`number`|Muestra la cantidad de producto que pidio el cliente|
|`precio`|`number`| Muestra el precio que tiene cada producto|


### Casos borde detectados

### caso 1: **me fije que en la propiedad `producto` hay algunos que no tienen el peso**

### caso 2: **en la propiedad `ciudades`, se supone que es nombre propio entnces todas deben de estar en MAYÚSCULAS y estan unas si y otras no**

### caso 3: **Yo veo que algunos `precios` no van como de acuerdo a las cantidades osea algunos precios dice que tal cafe vale tanto por una unidad y en otros dice que 2 unidaades de ese mismo vale igual que una unidad**

### caso 4: **Veo que en `cantidades` hay un cliente que se llevo 0 cantidades y se supone que eso literalmente no existe**

### Decisión:

#### para caso 1: **voy a agregarles el peso a los que faltan.**

#### para caso 2: **voy a normalizar los nombres para que  todo lo coja igual.**

#### para caso 3: **organizar los precios para ponerle bien a todos.**

#### para caso 4: **creo que borrare esa compra ya que no esta llevando ninguna cantidad**j
