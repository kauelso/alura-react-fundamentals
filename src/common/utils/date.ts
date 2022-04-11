export function tempoParaSegundos(tempo: string){
    const[horas = '0', minutos = '0', segundos = '0'] = tempo.split(":")

    const horasEmSeg = Number(horas) * 3600;
    const minutosEmSeg = Number(minutos) * 60;
    const seg = Number(segundos);

    return horasEmSeg + minutosEmSeg + seg;
}