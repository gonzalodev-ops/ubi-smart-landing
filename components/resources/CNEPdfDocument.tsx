import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';

// Registrar fuentes estándar (usaremos Helvetica por defecto que viene incluida, 
// pero definimos estilos para simular pesos)

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    fontFamily: 'Helvetica',
    paddingBottom: 40,
  },
  // Portada
  coverPage: {
    backgroundColor: '#0f172a', // Slate 900
    height: '100%',
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  coverBadge: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 4,
    padding: '6 12',
    alignSelf: 'flex-start',
    marginBottom: 40,
  },
  coverBadgeText: {
    color: '#ffffff',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  coverTitle: {
    fontSize: 36,
    color: '#ffffff',
    fontWeight: 'black', // Helvetica-Bold
    lineHeight: 1.2,
    marginBottom: 20,
  },
  coverHighlight: {
    color: '#00b388', // Brand
  },
  coverSubtitle: {
    fontSize: 16,
    color: '#cbd5e1', // Slate 300
    lineHeight: 1.5,
  },
  coverFooter: {
    borderTop: '1px solid rgba(255,255,255,0.2)',
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  coverClientLabel: {
    fontSize: 9,
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  coverClientName: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  coverClientUser: {
    fontSize: 12,
    color: '#00b388',
    marginTop: 2,
  },
  
  // Contenido General
  section: {
    margin: 10,
    padding: 30,
  },
  header: {
    fontSize: 10,
    color: '#94a3b8',
    textAlign: 'right',
    marginBottom: 20,
    borderBottom: '1px solid #e2e8f0',
    paddingBottom: 10,
  },
  h1: {
    fontSize: 22,
    color: '#0b1f33', // Brand Accent
    fontWeight: 'bold',
    marginBottom: 12,
    marginTop: 20,
  },
  h2: {
    fontSize: 14,
    color: '#00b388', // Brand
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10,
    textTransform: 'uppercase',
  },
  h3: {
    fontSize: 12,
    color: '#0f172a',
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 8,
  },
  text: {
    fontSize: 10,
    color: '#475569', // Slate 600
    lineHeight: 1.6,
    marginBottom: 8,
    textAlign: 'justify',
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 4,
    paddingLeft: 10,
  },
  bullet: {
    width: 10,
    fontSize: 10,
    color: '#00b388',
  },
  
  // Cajas Destacadas
  box: {
    backgroundColor: '#f8fafc',
    borderLeft: '3px solid #00b388',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  boxTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 4,
  },
  
  // Bonus Box
  bonusBox: {
    backgroundColor: '#eff6ff', // Blue 50
    padding: 15,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 15,
  },
  bonusTitle: {
    fontSize: 12,
    color: '#1e3a8a',
    fontWeight: 'bold',
    marginBottom: 6,
  },

  // Checklist
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    padding: 8,
    backgroundColor: '#f9fafb',
    borderBottom: '1px solid #e5e7eb',
  },
  checkSquare: {
    width: 12,
    height: 12,
    border: '1px solid #cbd5e1',
    marginRight: 10,
  },

  // Back Cover
  backCover: {
    backgroundColor: '#0f172a',
    height: '100%',
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactBox: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: 30,
    borderRadius: 10,
    marginTop: 40,
    width: '80%',
  },
  contactLabel: {
    color: '#00b388',
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 10,
    textAlign: 'center',
  },
  contactValue: {
    color: '#ffffff',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 4,
  },
  footerLegal: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#64748b',
    fontSize: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  }
});

interface CNEPdfProps {
  name: string;
  company: string;
}

export const CNEPdfDocument: React.FC<CNEPdfProps> = ({ name, company }) => (
  <Document>
    {/* --- PÁGINA 1: PORTADA --- */}
    <Page size="LETTER" style={styles.page}>
      <View style={styles.coverPage}>
        <View>
            <View style={styles.coverBadge}>
                <Text style={styles.coverBadgeText}>GUÍA TÉCNICA 2025</Text>
            </View>
            <Text style={styles.coverTitle}>
                Guía práctica para <Text style={styles.coverHighlight}>cumplir el acuerdo de la CNE</Text>
            </Text>
            <Text style={styles.coverSubtitle}>
                Balizado, QR y GPS en Gas LP: Cómo evitar multas, preparar tu flota para SIRACP y no perder el margen en el intento.
            </Text>
        </View>
        <View style={styles.coverFooter}>
            <View>
                <Text style={styles.coverClientLabel}>DOCUMENTO PREPARADO PARA:</Text>
                <Text style={styles.coverClientName}>{company}</Text>
                <Text style={styles.coverClientUser}>{name}</Text>
            </View>
            <Text style={{color: '#64748b', fontSize: 10}}>www.ubiqo.net</Text>
        </View>
      </View>
    </Page>

    {/* --- PÁGINA 2: CONTEXTO --- */}
    <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
            <Text style={styles.header}>Guía de Implementación CNE/SIRACP 2025</Text>
            
            <Text style={styles.h1}>1. Qué pasó el 23 de septiembre</Text>
            <Text style={styles.text}>
                El 23 de septiembre de 2025 se publicó en el Diario Oficial el acuerdo de la CNE que fija las nuevas reglas del juego para el transporte de petrolíferos y Gas LP. No es solo un trámite más: cambia cómo monitoreas y justificas tu operación.
            </Text>
            
            <View style={styles.box}>
                <Text style={styles.boxTitle}>Traducción al idioma director:</Text>
                <Text style={styles.text}>Si tienes pipas o autotanques vinculados a un permiso, ahora estás obligado a:</Text>
                <View style={styles.bulletPoint}><Text style={styles.bullet}>•</Text><Text style={styles.text}>Balizarlas con código QR único emitido por la CNE.</Text></View>
                <View style={styles.bulletPoint}><Text style={styles.bullet}>•</Text><Text style={styles.text}>Equiparlas con GPS activo certificado que guarde histórico de 12 meses.</Text></View>
                <View style={styles.bulletPoint}><Text style={styles.bullet}>•</Text><Text style={styles.text}>Reportar mediante el SIRACP (la nueva plataforma central).</Text></View>
            </View>

            <Text style={styles.h1}>2. ¿A quién aplica realmente?</Text>
            <Text style={styles.text}>Aplica a todas las unidades vehiculares asociadas al permiso:</Text>
            <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 10}}>
                <View style={{width: '50%', marginBottom: 10}}><Text style={styles.text}>[X] Pipas / Autotanques</Text></View>
                <View style={{width: '50%', marginBottom: 10}}><Text style={styles.text}>[X] Tractocamiones</Text></View>
                <View style={{width: '50%', marginBottom: 10}}><Text style={styles.text}>[X] Semirremolques</Text></View>
                <View style={{width: '50%', marginBottom: 10}}><Text style={styles.text}>[X] Unidades de Reparto</Text></View>
            </View>
            <Text style={{fontSize: 10, fontStyle: 'italic', color: '#64748b', marginTop: 10}}>
                Si eres una gasera con flota propia o subrogada, estás en el centro de la diana.
            </Text>
        </View>
    </Page>

    {/* --- PÁGINA 3: LOS 3 BLOQUES --- */}
    <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
            <Text style={styles.header}>Requisitos Técnicos</Text>

            <Text style={styles.h1}>3. Los 3 Bloques de la Norma</Text>

            <Text style={styles.h3}>3.1. Balizado y QR</Text>
            <Text style={styles.text}>
                El QR debe ser impreso en material retroreflectante y resistente. Al escanearlo, la autoridad puede ver la vigencia del permiso, producto transportado y seguros. Es tu "placa de identidad" digital.
            </Text>

            <Text style={styles.h3}>3.2. GPS Obligatorio (El punto crítico)</Text>
            <Text style={styles.text}>No sirve cualquier GPS barato. La norma exige:</Text>
            <View style={styles.bulletPoint}><Text style={styles.bullet}>✓</Text><Text style={styles.text}>Transmisión en tiempo real (~30 seg).</Text></View>
            <View style={styles.bulletPoint}><Text style={styles.bullet}>✓</Text><Text style={styles.text}>Histórico de 12 meses (La mayoría guarda 3).</Text></View>
            <View style={styles.bulletPoint}><Text style={styles.bullet}>✓</Text><Text style={styles.text}>Cifrado TLS y ciberseguridad bancaria.</Text></View>
            
            <View style={{padding: 8, backgroundColor: '#fef2f2', borderRadius: 4, marginTop: 5}}>
                <Text style={{fontSize: 9, color: '#b91c1c', fontWeight: 'bold'}}>ALERTA: La desconexión o manipulación se considera falta grave.</Text>
            </View>

            <Text style={styles.h3}>3.3. SIRACP</Text>
            <Text style={styles.text}>
                Es el "SAT operativo". Aquí se gestionan altas, bajas y códigos QR. Tu plataforma de GPS debe poder hablar con SIRACP vía API para no capturar datos manualmente.
            </Text>

            <View style={styles.bonusBox}>
                <Text style={styles.bonusTitle}>3.4. El Bonus: Inteligencia de Mercado Real</Text>
                <Text style={styles.text}>La mayoría cumple por miedo, pero pocos usan la data para vender más.</Text>
                
                <View style={styles.bulletPoint}><Text style={styles.bullet}>•</Text><Text style={styles.text}>Detectar rutas "invisibles": Si hay aperturas donde no hay clientes, hay mercado potencial.</Text></View>
                <View style={styles.bulletPoint}><Text style={styles.bullet}>•</Text><Text style={styles.text}>Mapa de calor real: Ve dónde está el dinero, no dónde "crees" que está.</Text></View>
                <View style={styles.bulletPoint}><Text style={styles.bullet}>•</Text><Text style={styles.text}>Auditoría comercial: Identifica rutas "muy trabajadas" pero "poco cobradas".</Text></View>
            </View>
        </View>
    </Page>

    {/* --- PÁGINA 4: CHECKLIST Y ERRORES --- */}
    <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
            <Text style={styles.header}>Plan de Acción</Text>

            <Text style={styles.h1}>4. Checklist de Acción</Text>
            
            <Text style={styles.h2}>Semana 1: Diagnóstico</Text>
            <View style={styles.checkRow}><View style={styles.checkSquare}/><Text style={styles.text}>Inventario fino: ¿Qué unidad con qué permiso?</Text></View>
            <View style={styles.checkRow}><View style={styles.checkSquare}/><Text style={styles.text}>Auditoría GPS: ¿Mi proveedor guarda 12 meses?</Text></View>
            <View style={styles.checkRow}><View style={styles.checkSquare}/><Text style={styles.text}>Balizado: ¿Tengo espacio físico para el QR?</Text></View>

            <Text style={styles.h2}>Semanas 2-4: Ejecución</Text>
            <View style={styles.checkRow}><View style={styles.checkSquare}/><Text style={styles.text}>Solicitar códigos QR vía SIRACP.</Text></View>
            <View style={styles.checkRow}><View style={styles.checkSquare}/><Text style={styles.text}>Migrar a GPS 4G con API abierta.</Text></View>
            <View style={styles.checkRow}><View style={styles.checkSquare}/><Text style={styles.text}>Definir quién reportará altas/bajas en SIRACP.</Text></View>

            <Text style={styles.h1}>5. Errores que cuestan dinero</Text>
            <View style={styles.bulletPoint}><Text style={{...styles.bullet, color: '#ea580c'}}>X</Text><Text style={{...styles.text, fontWeight: 'bold'}}>Comprar cualquier GPS barato</Text></View>
            <Text style={{...styles.text, marginLeft: 15}}>Si no guarda 12 meses de histórico, es multa segura en la primera auditoría.</Text>

            <View style={styles.bulletPoint}><Text style={{...styles.bullet, color: '#ea580c'}}>X</Text><Text style={{...styles.text, fontWeight: 'bold'}}>Olvidar la integración</Text></View>
            <Text style={{...styles.text, marginLeft: 15}}>SIRACP es digital. Enfocarse solo en la calcomanía física es un error. Necesitas software.</Text>
        </View>
    </Page>

    {/* --- PÁGINA 5: CIERRE --- */}
    <Page size="LETTER" style={styles.page}>
        <View style={styles.backCover}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', marginBottom: 20}}>
                Próximo paso: Del diagnóstico a la acción
            </Text>
            <Text style={{fontSize: 12, color: '#94a3b8', textAlign: 'center', maxWidth: 400, lineHeight: 1.6}}>
                Corta la conversación de "supuestos" y ten un mapa claro de cómo estás versus el acuerdo. UBI-SMART Gas LP es la solución diseñada para cumplir hoy y protegerte siempre.
            </Text>
            
            <View style={styles.contactBox}>
                <Text style={styles.contactLabel}>CONTACTO DIRECTO</Text>
                <Text style={styles.contactValue}>442 391 1129</Text>
                <Text style={styles.contactValue}>ventas@integrador.pro</Text>
            </View>

            <Text style={styles.footerLegal}>
                UBI-SMART Gas LP · Soluciones Ubiqo · 2025
            </Text>
        </View>
    </Page>
  </Document>
);