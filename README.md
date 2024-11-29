# TalentTechProject
Proyecto implementando infraestructura como código en la nube de AWS.

Introducción
En un mundo cada vez más interconectado, las empresas buscan optimizar sus procesos mediante arquitecturas modernas y adaptables. Este proyecto propone una solución de infraestructura basada en servicios en la nube utilizando tecnologías de Amazon Web Services (AWS) para una empresa de mudanzas. La solución emplea microservicios, una gestión eficiente de usuarios y autenticación, además de un sistema de eventos robusto para mantener los servicios desacoplados. Todo esto garantiza escalabilidad, seguridad y adaptabilidad en las operaciones empresariales.

Objetivo
El objetivo principal de este proyecto es diseñar y desplegar una arquitectura de infraestructura como código para soportar las operaciones de una empresa de mudanzas. Esta arquitectura incluye:

Gestión de autenticación y usuarios mediante Amazon Cognito.
Procesos automatizados y personalizables con funciones Lambda y API Gateway.
Sistemas de eventos dinámicos utilizando EventBridge para la comunicación entre microservicios.
Almacenamiento confiable para datos transaccionales en bases de datos relacionales.
El sistema busca ser altamente desacoplado, fácil de escalar y seguro, apoyando así el crecimiento continuo de la empresa.
Conclusión
La arquitectura propuesta no solo permite una gestión eficiente de los procesos operativos de la empresa de mudanzas, sino que también sienta las bases para su crecimiento y modernización tecnológica. Al aprovechar herramientas de AWS como Cognito, Lambda, API Gateway y EventBridge, se logra un ecosistema dinámico y desacoplado, garantizando que cada microservicio pueda evolucionar independientemente. Este enfoque asegura que la solución no solo cumpla con las necesidades actuales, sino que esté preparada para enfrentar los retos futuros de la industria.

Arquitectura

![image](https://github.com/user-attachments/assets/0a752f86-6fa4-4dff-a70d-fbb31ea605cd)

1. Arquitectura
1.	Cognito:
o	Se autentican usuarios (Clientes y empleados de la empresa de mudanzas).
o	Se definen grupos de usuarios y políticas de acceso (IAM roles).
2.	Lambda Auth Function:
o	Función de autorización personalizada para API Gateway.
o	Tokens JWT emitidos por cognito y aplica lógica adicional si es necesario.
3.	API Gateway:
o	Endpoints de aplicación para funcionalidades como:
	Registrar mudanzas.
	Asignar camiones a una mudanza.
	Consultar estado de los pedidos.
o	Enrutamiento basado en recursos.
4.	EventBridge:
o	Se manejará eventos como:
	"Nueva mudanza registrada".
	"Camión asignado a una mudanza".
	"Mudanza completada".
o	Conectará diferentes servicios dentro de los microservicios para mantenerlos desacoplados.
5.	Base de Datos:
	Relacional (RDS) para datos transaccionales.
2. Infraestructura como Código
•	AWS CloudFormation para definir y desplegar recursos.
•	Estructura los archivos para incluir:
o	Cognito: Pools de usuarios, roles.
o	Lambda: Crear funciones y sus configuraciones (Permisos, variables de entorno).
o	API Gateway: Definición de endpoints.
o	EventBridge: Reglas de eventos y targets.
o	Base de Datos: Tablas o instancias.
3. Ejemplo de Modelo de Eventos
•	Evento: "Nueva mudanza registrada".
o	Producido por un endpoint en API Gateway.
o	Publicado en EventBridge.
o	Consumido por:
	Un servicio que selecciona el camión adecuado.
	Otro servicio que notifica al cliente sobre la asignación.
•	Evento: "Camión asignado".
o	Disparado cuando se selecciona un camión.
o	Consumido por un servicio que inicia el monitoreo de la mudanza (Tracking GPS).
4. Microservicios
Cada funcionalidad (Administración de camiones, asignación de mudanzas) puede estar encapsulada en un microservicio que:
•	Tiene su propia base de datos.
•	Publica y consume eventos a través de EventBridge.
