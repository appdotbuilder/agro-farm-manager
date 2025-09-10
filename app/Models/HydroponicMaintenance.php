<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\HydroponicMaintenance
 *
 * @property int $id
 * @property int $hydroponic_plant_id
 * @property \Illuminate\Support\Carbon $maintenance_date
 * @property string $type
 * @property string $description
 * @property string|null $problems_found
 * @property string|null $actions_taken
 * @property float $cost
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @property-read \App\Models\HydroponicPlant $hydroponicPlant
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicMaintenance newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicMaintenance newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicMaintenance query()
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicMaintenance whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicMaintenance whereHydroponicPlantId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicMaintenance whereMaintenanceDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicMaintenance whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicMaintenance whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicMaintenance whereProblemsFound($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicMaintenance whereActionsTaken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicMaintenance whereCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicMaintenance whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HydroponicMaintenance whereUpdatedAt($value)

 * 
 * @mixin \Eloquent
 */
class HydroponicMaintenance extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'hydroponic_plant_id',
        'maintenance_date',
        'type',
        'description',
        'problems_found',
        'actions_taken',
        'cost',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'maintenance_date' => 'date',
        'cost' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the hydroponic plant that owns the maintenance record.
     */
    public function hydroponicPlant(): BelongsTo
    {
        return $this->belongsTo(HydroponicPlant::class);
    }
}