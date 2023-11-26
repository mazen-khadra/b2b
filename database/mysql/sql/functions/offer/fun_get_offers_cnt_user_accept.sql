DELIMITER $$
CREATE FUNCTION `fun_get_offers_cnt_user_accept` (
    p_user_id             BIGINT UNSIGNED,
    p_duration_days       BIGINT UNSIGNED
)
RETURNS DOUBLE
BEGIN
   
  RETURN (
    SELECT 
      COUNT(*)
    FROM 
      offers o
      INNER JOIN tenders t ON tender_id = id_tender
    WHERE 
      t.creat_by_user_id = p_user_id AND 
      o.status = 'ACCEPTED' AND (
        p_duration_days IS NULL OR 
        (  
          p_duration_days = 1 AND 
          DATE(CURRENT_TIMESTAMP()) = DATE(accepted_at) 
        ) OR 
        (
          p_duration_days = 30 AND 
          MONTH(CURRENT_TIMESTAMP()) = MONTH(accepted_at) AND 
          YEAR(CURRENT_TIMESTAMP()) = YEAR(accepted_at)
        ) OR 
        (
          p_duration_days IS NOT NULL AND
          accepted_at > DATE_SUB(CURRENT_TIMESTAMP(), INTERVAL p_duration_days DAY)
        )  
      )
  );

END$$