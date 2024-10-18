def get_response(message):
    if message == '1':
        return "Has seleccionado Mini Donas y Paletas de Chocolate.\n1. Donas de Chocolate\n2. Paletas de Chocolate"
    elif message == '1.1':
        return "Has seleccionado Donas de Chocolatess. ¡Son deliciosas!"
    elif message == '1.2':
        return "Has seleccionado Paletas de Chocolate. ¡Son increíbles!"
    elif message == '2':
        return "Has seleccionado Anchetas Sorpresa y desayunos a tu puerta.\n1. Ancheta Sorpresa\n2. Desayuno Especial"
    elif message == '2.1':
        return "Has seleccionado Ancheta Sorpresa. ¡Sorprende a tus seres queridos!"
    elif message == '2.2':
        return "Has seleccionado Desayuno Especial. ¡Un comienzo perfecto para el día!"
    elif message == '3':
        return "Has seleccionado Maquillaje y Accesorios.\n1. Maquillaje\n2. Accesorios"
    elif message == '3.1':
        return "Has seleccionado Maquillaje. ¡Descubre nuestros productos de alta calidad!"
    elif message == '3.2':
        return "Has seleccionado Accesorios. ¡Completa tu look con estilo!"
    elif message == '4':
        return "Has seleccionado Hablemos por WhatsApp. ¡Contáctanos ahora mismo!"
    elif message == '5':
        return "Has seleccionado Deseo ver su catálogo. ¡Echa un vistazo a nuestra increíble colección!"
    else:
        return "No entendí tu elección. Por favor, selecciona un número del 1 al 5."

# Ejemplo de uso:
response = get_response('1')
print(response)
