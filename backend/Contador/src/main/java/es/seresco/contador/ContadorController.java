package es.seresco.contador;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/contador")
public class ContadorController {

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/incrementar")
	public ResponseEntity<Object> incrementar(@RequestBody Operando o) throws Exception{
		if(o.operando == 6)
			return new ResponseEntity<>("Operación no válida", HttpStatus.INTERNAL_SERVER_ERROR);
		else {
			System.out.println("Incrementando el valor: " + o.operando);
			o.operando++;
			return new ResponseEntity<>(o, HttpStatus.OK);
		}
	}
}
